//Define an angular module for our app 
var ETradersApp = angular.module("ETradersApp", ["ngRoute", "ngAnimate", "ui.bootstrap", "toaster", "ui.grid", "ui.grid.edit", "ui.grid.cellNav", "ui.grid.pagination", "ui.grid.autoResize", "ui.grid.selection", "ui.grid.resizeColumns", "ui.grid.grouping", "mgcrea.ngStrap" ]);
//for autocomplete dropdown

ETradersApp.constant("LocalServiceURL", "http://localhost:50503");

ETradersApp.directive("select2", function ($timeout, $parse) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function (scope, element, attrs) {
            $timeout(function () {
                element.select2();
                element.select2Initialized = true;
            });

            var recreateSelect = function () {
                if (!element.select2Initialized) {
                    return;
                }
                $timeout(function () {
                    element.select2('destroy');
                    element.select2();
                });
            };

            scope.$watch(attrs.ngModel, recreateSelect);

            if (attrs.ngOptions) {
                var list = attrs.ngOptions.match(/ in ([^ ]*)/)[1];
                // watch for option list change
                scope.$watch(list, recreateSelect);
            }

            if (attrs.ngDisabled) {
                scope.$watch(attrs.ngDisabled, recreateSelect);
            }
        }
    };
});

//Define Routing for app
ETradersApp.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $locationProvider.html5Mode({
          enabled: false,
          requireBase: true
      });

      $routeProvider.when("/", {
          templateUrl: '/template/WholeSale.html',
          controller: 'ManageWholeSaleController'
        }).when("/WholeSale", {
            templateUrl: '/template/WholeSale.html',
            controller: 'ManageWholeSaleController'
        }).when("/Dashboard", {
            templateUrl: '/template/Dashboard.html',
            controller: 'BasicDetailsController'
        });
  }]);


