'use strict';

angular.module('app')
    .controller('homeController',
        ['$scope', '$rootScope','fetchDataService',
            function ($scope, $rootScope, fetchDataService) {
                console.log("********")
                $scope.showDateRange = true;
                $scope.showTable = false;
                $scope.showFirstChart = false;
                $scope.showSecondChart = false;

                $rootScope.mainDate = {}

                $scope.changeTab = function (selectedTab) {
                    // console.log("selectedTab", selectedTab)
                    if (selectedTab === 'dR') {
                        $scope.showDateRange = true;
                        $scope.showTable = false;
                        $scope.showFirstChart = false;
                        $scope.showSecondChart = false;
                    } else if (selectedTab === 't') {
                        $scope.showDateRange = false;
                        $scope.showTable = true;
                        $scope.showFirstChart = false;
                        $scope.showSecondChart = false;
                    } else if (selectedTab === 'fC') {
                        $scope.showDateRange = false;
                        $scope.showTable = false;
                        $scope.showFirstChart = true;
                        $scope.showSecondChart = false;
                    } else if (selectedTab === 'sC') {
                        $scope.showDateRange = false;
                        $scope.showTable = false;
                        $scope.showFirstChart = false;
                        $scope.showSecondChart = true;
                    }
                }


                var formdata = { "organization": "DemoTest", "view": "Auction" }

                fetchDataService.fetchDateRange(formdata).then(function (response) {
                    $rootScope.mainDate = angular.copy(response);
                    // console.log("---mainDate-->", $rootScope.mainDate)
                    $rootScope.startDate = new Date(parseInt(response.data.result.startDate)).toUTCString('en').split(',')[1].split(' ').slice(1, 4)
                    $rootScope.endDate = new Date(parseInt(response.data.result.endDate)).toUTCString('en').split(',')[1].split(' ').slice(1, 4)
                })

            }]);