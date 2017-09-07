(function () {
    'use strict';

    angular
        .module('app')
           .config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/login', {
            templateUrl: 'app/pages/login.controller.html',
            controller: 'Login as vm'
        }).when('/register', {
            templateUrl: 'app/pages/register.controller.html',
            controller: 'Register as vm'
        }).when('/home', {
            templateUrl: 'app/pages/home.controller.html',
            controller: 'Home as vm'
        }).when('/main', {
            templateUrl: 'app/pages/main.controller.html',
            controller: 'Main as vm'
        })
        .otherwise({
            redirectTo: '/login'
        });
        //$locationProvider.html5Mode(true);
    }]);
})();