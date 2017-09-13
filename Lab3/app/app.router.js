(function () {
    'use strict';

    angular
        .module('app')
           .config(['$routeProvider', '$logProvider',  '$locationProvider', 'socialProvider',
    function ($routeProvider, $logProvider, $locationProvider, socialProvider) {
        $logProvider.debugEnabled(true),
            socialProvider.setGoogleKey('139914749858-ij8lcqu288a55cgah0gjdtsokbo8mqp0.apps.googleusercontent.com'),
            socialProvider.setFbKey({appId: '266289193576013', apiVersion: 'v2.4'}),
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