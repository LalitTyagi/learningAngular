'use strict';

angular.module('app')
    .controller('table',
        ['$scope', '$rootScope', 'fetchDataService',
            function ($scope, $rootScope, fetchDataService) {
                console.log("****table****")
                // $rootScope.$on('t_selected', function (data,msg) {
                //     console.log("----t_selected----",msg)
                // })
                $scope.firstFunction = function ($scope) {

                    // We need $scope argument as we are 
                    // altering the variables defined in 
                    // the $scope 
                    $scope.tableText = "Table";

                    var formdata = { "_id": "dashboard1516252439345", "emailId": "candidate@sigmoid.com", "orgViewReq": { "organization": "DemoTest", "view": "Auction" }, "chartObject": { "metadata": { "title": "chartobject:1516252439345", "img_thumbnail": "../img/chart.png", "chartType": "table", "dataLimit": 50 }, "requestParam": { "granularity": "hour", "timeZone": { "name": "UTC (+00:00)", "location": "UTC" }, "dateRange": { "startDate": "1493337600000", "endDate": "1493510400000" }, "xAxis": ["D044"], "yAxis": ["M002"], "approxCountDistinct": [], "specialCalculation": [], "filter": [], "orderBy": { "metricOrdByList": [{ "id": "M002", "desc": true }] }, "percentCalList": [] } } }

                    fetchDataService.fetchData(formdata).then(function (response) {
                        $rootScope.tableDate = angular.copy(response.data.result.data);
                        // console.log("---tableDate-->", $rootScope.tableDate)
                    })

                }
            }]);