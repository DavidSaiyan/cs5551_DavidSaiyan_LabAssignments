(function () {
    'use strict';

    angular
        .module('app')
        .controller('Register', register);

    register.$inject = ['$scope', '$http', '$log', 'baseUrl', '$window'];

    function register($scope, $http, $log, baseUrl, $window) {
        var vm = this;

        vm.fname = 'David';
        vm.lname = 'Dude';
        vm.password = '';
        vm.username = '';
    }
})();