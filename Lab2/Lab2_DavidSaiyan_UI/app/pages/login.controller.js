(function () {
    'use strict';

    angular
        .module('app')
        .controller('Login', login);

    login.$inject = ['$scope', '$http', '$log', '$window'];

    function login($scope, $http, $log, $window) {
        var vm = this;

        vm.username = 'david'
        vm.password = ''

        $log.debug("[Loaded Login Controller]");


        vm.login = function(username, pass){
            //do stuff
            return true;
        }
    }
})();