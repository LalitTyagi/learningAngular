'use strict';

// declare modules
//Module - a container for the different parts of an app including controllers, services, filters, directives which configures the Injector
//Controller - the business logic behind views
//The ngRoute module routes your application to different pages without reloading the entire application.


angular.module('app', [
    'ngRoute',
    'ngCookies'
])

.config(['$routeProvider', function ($routeProvider) {
    //Use the $routeProvider to configure different routes in your application:
    //With the $routeProvider you can define what page to display when a user clicks a link.
    //With the $routeProvider you can also define a controller for each "view".
    $routeProvider
        .when('/login', {
            // template: 'login',
            // controller: 'loginController',
            templateUrl: 'template/login.html'
        })

        .when('/', {
            templateUrl: 'template/home.html'
        })

        // .when('/table', {
        //     templateUrl: 'template/table.html'
        // })

        // .when('/firstChart', {
        //     templateUrl: 'template/firstChart.html'
        // })

        // .when('/secondChart', {
        //     templateUrl: 'template/secondChart.html'
        // })

        .otherwise({ redirectTo: '/login' });
}])