'use strict';
 
angular.module('app')
 
.factory('login',
    ['$http', '$cookieStore', '$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};
        
        service.Login = function (email, password, callback) {
            // console.log("---email-->",email)
            // console.log("---password-->",password)
            var formdata = { email: email, password: password,"rememberMe":true }
            $http.post('https://sigviewauth.sigmoid.io/signIn', formdata)
               .success(function (response) {
                console.log("---response-->",response)
                   callback(response);
               });

        };
 
        return service;
    }])