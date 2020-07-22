ETradersApp.controller("ManageWholeSaleController", ['$scope', '$filter', '$http', '$location', '$routeParams', '$timeout', 'toaster', 'CommonService', function ($scope, $filter, $http, $location, $routeParams, $timeout, toaster, CommonService) {
    $scope.PageTitle = "Whole Sale";
    $scope.BillNo = "2020-07/01";
    $scope.TodaysDate = $filter('date')(new Date(), "dd/MM/yyyy");
    $scope.WholeSale = {};
    $scope.MaterialLists = [];
    $scope.SupplierRetailers = [];

    $scope.ItemLists = [
        {
            "MaterialId": 0,
            "Short_Name": "",
            "Descriptioin": null,
            "Unit": null,
            "Retail_Rate": 0,
            "Whole_Sale_Rate": 0,
        }
    ];
    $scope.ItemList = [
        { Id: 1, Short_Name: "MDF 6mm", Rate: 900, Unit: "Piece" },
        { Id: 1, Short_Name: "MDF 6mm", Rate: 900, Unit: "Piece" },
        { Id: 2, Short_Name: "Colors", Rate: 2000, Unit: "KG" },
        { Id: 3, Short_Name: "Nails", Rate: 50, Unit: "KG" },
        { Id: 4, Short_Name: "Cement", Rate: 50, Unit: "KG" }
    ];

    $scope.gridOptions = {
        enableFiltering: false,
        enableCellEditOnFocus: true,
        enableRowSelection: false,
        enableRowHeaderSelection: true,
        enableSelectAll: true,
        enableColumnResizing: true,

        columnDefs: [
            {
                name: 'ID', field: 'ID', visible: false
            },
            {
                name: 'Short_Name', displayName: 'Short_Name', editableCellTemplate: 'ui-grid/dropdownEditor',
                editDropdownValueLabel: 'Short_Name', editDropdownIdLabel: 'Short_Name', editDropdownOptionsArray: $scope.ItemList
            },
            { displayName: 'Rate', field: 'Whole_Sale_Rate', cellTooltip: true, enableCellEdit: false, cellClass: 'text-right', headerCellClass: 'text-center' },
            { displayName: 'Unit', field: 'Unit', cellTooltip: true, enableCellEdit: false, cellClass: 'text-left', headerCellClass: 'text-center' },
            { displayName: 'Quantity', field: 'Quantity', enableCellEdit: true, enableCellEditOnFocus: true, cellTooltip: true, cellClass: 'text-right', headerCellClass: 'text-center' },
            { displayName: 'Discount', field: 'Discount', enableCellEdit: true, cellTooltip: true, cellClass: 'text-right', headerCellClass: 'text-center' },
            { displayName: 'DLP', field: 'DLP', enableCellEdit: true, cellTooltip: true, cellClass: 'text-right', headerCellClass: 'text-center' },
            { displayName: 'Discount Amt', field: 'Discount Amount', enableCellEdit: false, cellTooltip: true, cellClass: 'text-right', headerCellClass: 'text-center' },
            { displayName: 'Amount', field: 'Amount', enableCellEdit: false, cellTooltip: true, cellClass: 'text-right', headerCellClass: 'text-center' },

        ],
        data: $scope.ItemLists

    };

    $scope.GetContactNo = function () {
        $scope.WholeSale.ContactNo = $filter('filter')($scope.SupplierRetailers, { SupplierRetailerId: $scope.WholeSale.SupplierRetailer }, true)[0].Contact;
    };

    $scope.GetMaterials = function () {
        CommonService.GetMaterials().then(function (response) {
            if (response) {
                $scope.MaterialLists = response;
                $scope.gridOptions.data = $scope.ItemLists;
                console.log($scope.MaterialLists);
            }
        });
    };

    $scope.GetSupplierRetailer = function () {
        CommonService.GetSupplierRetailer().then(function (response) {
            if (response) {
                $scope.SupplierRetailers = response;
                console.log($scope.SupplierRetailers);
            }
        });
    };

    $scope.AddItem = function () {
        var item = {
            "MaterialId": 0,
            "Short_Name": null,
            "Descriptioin": null,
            "Unit": null,
            "Retail_Rate": 0,
            "Whole_Sale_Rate": 0
            
        };
        $scope.ItemLists.push(item);
    };

    $scope.init = function () {
        $scope.GetMaterials();
        $scope.GetSupplierRetailer();
    };

    $scope.init();
}]);