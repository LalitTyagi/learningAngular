'use strict';

angular.module('app')
    .service('fetchDataService',
        ['$http', '$rootScope',
            function ($http, $rootScope) {

                this.token = sessionStorage.getItem("_t");

                var headerDict = {
                    'x-auth-token': sessionStorage.getItem("_t")
                }

                var requestOptions = {
                    headers: new Headers(headerDict),
                };

                return {
                    fetchDateRange: function(formdata){
                        return $http.post("https://sigviewauth.sigmoid.io/api/v1/getDateRange", formdata, requestOptions)
                    },
                    fetchData: function(formdata){
                        return $http.post("https://sigviewauth.sigmoid.io/api/v1/getData", formdata, requestOptions)
                    }
                };
            }])
