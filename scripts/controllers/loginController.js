'use strict';

angular.module('app')
    .controller('loginController',
        ['$scope', '$rootScope', '$location', 'login',
            function ($scope, $rootScope, $location, loginService) {
                // reset login status
                // loginService.ClearCredentials();

                $scope.login = function () {
                    $scope.dataLoading = true;
                    loginService.Login($scope.email, $scope.password, function (response) {
                        if (response.statusCode === "200") {
                            sessionStorage.setItem("_t", response.token);
                            $location.path('/');
                        }
                    });
                };
            }]);