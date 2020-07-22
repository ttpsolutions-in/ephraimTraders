//Service to call Local Rest API
ETradersApp.factory('CommonService', ['$http', '$alert', 'LocalServiceURL', 'ExceptionHandler', function ($http, $alert, LocalServiceURL, ExceptionHandler) {

    var CommonService = {};

    CommonService.GetMaterials = function () {
        var req = {
            method: 'GET',
            cache: true,
            url: LocalServiceURL + '/api/common/GetMaterials',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var promise = $http(req).then(function (response) {
            return response.data;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    };


    CommonService.GetSupplierRetailer = function () {
        var req = {
            method: 'GET',
            cache: true,
            url: LocalServiceURL + '/api/common/GetSupplierRetailer',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var promise = $http(req).then(function (response) {
            return response.data;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    };

    //Get All Resource list
    CommonService.GetEmployeeNameList = function (pageIndex, InEmployeeName, InBusinessUnitID) {
        //Prepare request object
        var postData = { pageIndex: pageIndex, inEmployeeName: InEmployeeName, inBusinessUnitID: InBusinessUnitID };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllResourcesForDashboard',
            headers: {
                'Content-Type': 'application/json'
            },
            data:postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllResourcesForDashboardResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //get manager List
    CommonService.GetManagerList = function () {
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetManagerList',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetManagerListResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    CommonService.GetEmployeeByManagerName = function () {
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetEmployeeByManagerName',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetEmployeeByManagerNameResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Resource details by id
    CommonService.GetEmployeeByID = function (id) {
        var postData = { employeeId: id };
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetEmployeeByID',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetEmployeeByIDResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Resource details by Employee Name
    CommonService.GetEmployeeByName = function (name) {
        var postData = { employeeName: name };
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetEmployeeByName',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetEmployeeByNameResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

     //Get Resource details by Employee Name
    CommonService.ResourceCheck = function (name) {
        var postData = { employeeName: name };
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/ResourceCheck',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.ResourceCheckResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }


    //Get All Resource list
    CommonService.GetEmployeeNameForDDL = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllResources',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllResourcesResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }
    //Save Employee Details
    CommonService.SaveEmployee = function (employee) {
        FormData = { employee: employee }
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/AddEmployee',
            
            headers: {
                'Content-Type': 'application/json'
            },
            data: FormData
        };
        var promise = $http(req).then(function (response) {
            return response;
        }, function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    };

    //Edit Employee
    CommonService.UpdateEmployee = function (employee) {
        var postData = {employee: employee}
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/UpdateEmployee',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        };
        var promise = $http(req).then(function (response) {
            return response.data.UpdateEmployeeResult;
        },
        function (response) {

        });
        return promise;
    }

    //Delete Employee Info By Id
    CommonService.DeleteEmployee = function (id) {
        var postData = { employeeId: id };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/DeleteEmployee',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        };
        var promise = $http(req).then(function (response) {
            return response.data.DeleteEmployeeResult;
        },
        function (response) {
        });
        return promise;
    }
  
   


    //Get BU List
    CommonService.GetBUList = function () {
        //Prepare request object
        var dataParams = null;
        var req = {
            method: 'POST',
            cache: true,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllBuisnessUnit',
            headers: {
                'Content-Type': 'application/json'
            },
            data: dataParams
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllBuisnessUnitResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Get DepartmentList
    CommonService.GetDepartmentList = function () {
      
        var dataParams = null;
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllDepartment',
            headers: {
                'Content-Type': 'application/json'
            },
            data: dataParams
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllDepartmentResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }
    //Get Department By Name
    CommonService.GetDepartmentByName = function (DepartmentName) {

        var dataParams = { departmentName: DepartmentName };
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetDepartmentByName',
            headers: {
                'Content-Type': 'application/json'
            },
            data: dataParams
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetDepartmentByNameResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Department By ID
    CommonService.GetDepartmentById = function (DepartmentID) {

        var dataParams = { departmentID: DepartmentID };
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetDepartmentById',
            headers: {
                'Content-Type': 'application/json'
            },
            data: dataParams
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetDepartmentByIdResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }


    //Get Role List
    CommonService.GetRoleList = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllRoleMasterDetails',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllRoleMasterDetailsResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Role List
    CommonService.GetRoleByTaskID = function (TaskID) {
        postData = { taskID: TaskID }
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetRoleByTaskID',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
           
            //Return WCF Service response
            return response.data.GetRoleByTaskIDResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Plant List
    CommonService.GetPlantList = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetPlantList',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetPlantListResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Group List
    CommonService.GetGroupList = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllGroupMasterDetails',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllGroupMasterDetailsResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }

    //Get Group List for save timesheet
    CommonService.GetGroupListByIDs = function (periodStartDate) {
        var postData = {
            periodStartDate: periodStartDate
        }
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetGroupListByIDs',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetGroupListByIDsResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    }


    //Get All Program master list for fill timesheet of particular department
    CommonService.GetProgramListForDDL = function (periodStartDate) {
        var postData = {periodStartDate:periodStartDate}
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllProgramTaskMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data:postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllProgramTaskMasterResult;

        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Get All Program master list for View timesheet for approver
    CommonService.GetAllProgramList = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllProgramList',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllProgramListResult;

        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }
    

    //Get Task List
    CommonService.GetTaskList = function (pageIndex, searchTask, searchDepartment, searchGroup) {
        var postdata = { pageIndex: pageIndex, searchTask: searchTask, searchDepartment: searchDepartment,searchGroup: searchGroup};
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetTaskListForDashboard',
            headers: {
                'Content-Type': 'application/json'
            },
            data:postdata
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetTaskListForDashboardResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    };

    //Get Task List Info
    CommonService.GetTaskListForDDL = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetTaskList',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetTaskListResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    };
    //Get Task Details By Id
    CommonService.GetTaskById = function (id) {
        var postData = { taskId: id };
        //Prepare request objectTaskId
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetTaskById',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetTaskByIdResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }


    //Get Add Task
    CommonService.AddTask = function (taskMaster, mapRoleToTask) {
     
        var PostData = { taskMaster: taskMaster, mapRoleToTask: mapRoleToTask }
        //Prepare request object
        var req = {
            method: 'POST',
            cache: true,
            url: LocalServiceURL + 'WCFService/MasterController.svc/AddTask',
            headers: {
                'Content-Type': 'application/json'
            },
            data: PostData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
         
            //Return WCF Service response
            return response.data.AddTaskResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    };

    //Map Task To Role
    CommonService.mapTaskToRole = function (mapRoleToTask) {
        var PostData = { mapRoleToTask: mapRoleToTask }
        //Prepare request object
        var req = {
            method: 'POST',
            cache: true,
            url: LocalServiceURL + 'WCFService/MasterController.svc/MapRoleToTask',
            headers: {
                'Content-Type': 'application/json'
            },
            data: PostData
        }

        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.MapTaskToRoleResult;
           }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });

        return promise;
    };

    //Delete Task
    CommonService.DeleteTask = function (id) {
        var postData = { taskId: id };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/DeleteTask',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        };

        var promise = $http(req).then(function (response) {
            return response.data;
        },
        function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

  //  Update Task
    CommonService.UpdateTask = function (taskMaster, mapRoleToTask) {
        var postData = { taskMaster: taskMaster, mapRoleToTask: mapRoleToTask }
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/UpdateTask',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        };

        var promise = $http(req).then(function (response) {
            return response.data.UpdateTaskResult;
        },
        function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Get Frequency of task list
    CommonService.GetFrequncyOfTaskList = function () {
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllFrequencyMasterDetails',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetAllFrequencyMasterDetailsResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Get Program Details By ID
    CommonService.GetProgramInfoById = function (ProgramID) {
        var postData = { programId: ProgramID };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllProgramMasterByID',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        var promise = $http(req).then(function (response) {
            return response.data.GetAllProgramMasterByIDResult;
        }, function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    };

    //delete Program by id
    CommonService.DeleteProgram = function (id) {
        var postData = { programId: id };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/DeleteProgramMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        };

        var promise = $http(req).then(function (response) {
            return response.data.DeleteProgramMasterResult;
        },
        function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Save Program
    CommonService.ManageProgramInfo = function (programMaster) {

        if (programMaster.ProgramStartDate != null) {
            programMaster.ProgramStartDate = new Date(programMaster.ProgramStartDate).toMSJSON();
        }
        if (programMaster.ProgramEndDate != null) {
            programMaster.ProgramEndDate = new Date(programMaster.ProgramEndDate).toMSJSON();
        }
       
        //Prepare request object
        var postData = { programMaster: programMaster };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/CreateProgramMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.CreateProgramMasterResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Get All Program master list
    CommonService.GetProgramList = function (pageIndex, searchProgramName, InBusinessUnitID, InDepartmentID) {
        //Prepare request object
        var postData = { pageIndex: pageIndex, inProgramName: searchProgramName, inBusinessUnitID: InBusinessUnitID, inDepartmentID: InDepartmentID };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetProgramListForDashboard',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetProgramListForDashboardResult;

        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }
    //Update Program
    CommonService.UpdateProgram = function (programMaster) {
        if (programMaster.ProgramStartDate != null) {
            programMaster.ProgramStartDate = new Date(programMaster.ProgramStartDate).toMSJSON();
        }
        if (programMaster.ProgramEndDate != null) {
            programMaster.ProgramEndDate = new Date(programMaster.ProgramEndDate).toMSJSON();
        }
        var postData = { programMaster: programMaster }
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/UpdateProgramMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        };
        var promise = $http(req).then(function (response) {
            return response.data.UpdateProgramMasterResult;
        },
        function (response) {

        });
        return promise;
    }

    /********** Group ************************/

    //Get Group Details By ID
    CommonService.GetGroupInfoById = function (GroupID) {
        var postData = { groupId: GroupID }
    
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetAllGroupMasterByID',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData,
        }
        var promise = $http(req).then(function (response) {
            return response.data.GetAllGroupMasterByIDResult;
        }, function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    };

    //delete Group by id
    CommonService.DeleteGroup = function (GroupID) {
        var postData = { groupId: GroupID }
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/DeleteGroupMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData,
        }

        var promise = $http(req).then(function (response) {
            return response.data.DeleteGroupMasterResult;
        },
        function (response) {
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Save Group
    CommonService.ManageGroupInfo = function (groupMaster) {
        var postData = { groupMaster: groupMaster };
        //Prepare request object
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/CreateGroupMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData,
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.CreateGroupMasterResult;
        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }

    //Get All Group master list
    CommonService.GetGroupListForDashboard = function (pageIndex, searchGroupName, InBusinessUnitID, InDepartmentID) {
        //Prepare request object
        var postData = { pageIndex: pageIndex, inGroupName: searchGroupName, inBusinessUnitID: InBusinessUnitID, inDepartmentID: InDepartmentID };
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetGroupListForDashboard',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData
        }
        //Call WCF Service
        var promise = $http(req).then(function (response) {
            //Return WCF Service response
            return response.data.GetGroupListForDashboardResult;

        }, function (response) {
            //Exception Handling
            ExceptionHandler.HandleException(response);
        });
        return promise;
    }
    //Update Group
    CommonService.UpdateGroup = function (groupMaster) {
    
        var postData = { groupMaster: groupMaster }
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/UpdateGroupMaster',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData,
        }
        var promise = $http(req).then(function (response) {
            return response.data.UpdateGroupMasterResult;
        },
        function (response) {

        });
        return promise;
    }

    /**********End Group ************************/

    CommonService.AddResourceCosts = function (resourceCosts) {
        var postData = { resourceCosts: resourceCosts }
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/AddResourceCosts',
            headers: {
                'Content-Type': 'application/json'
            },
            data: postData,
        }
        var promise = $http(req).then(function (response) {
            return response.data.AddResourceCostsResult;
        },
        function (response) {

        });
        return promise;
    }

    CommonService.GetResourceCosts = function (resourceCosts) {
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/GetResourceCosts',
            headers: {
                'Content-Type': 'application/json'
            }
           
        }
        var promise = $http(req).then(function (response) {
            return response.data.GetResourceCostsResult;
        },
        function (response) {

        });
        return promise;
    }

    CommonService.DeleteResourceCosts = function (resourceCosts) {
        var req = {
            method: 'POST',
            cache: false,
            url: LocalServiceURL + 'WCFService/MasterController.svc/DeleteResourceCosts',
            headers: {
                'Content-Type': 'application/json'
            }

        }
        var promise = $http(req).then(function (response) {
            return response.data.DeleteResourceCostsResult;
        },
        function (response) {

        });
        return promise;
    }
    return CommonService;
}]);

