(function () {
    'use strict';

    angular
        .module('app')
        .controller('Login', login);

    login.$inject = ['$scope', '$http', '$log', 'baseUrl', '$window'];

    function login($scope, $http, $log, baseUrl, $window) {
        var vm = this;

        var localStore = window.localStorage;

        vm.username = '';
        vm.password = '';
        vm.errorMsg = false;

        $log.debug("[Loaded Login Controller]");

        vm.navigate = function(page){
            $window.location.href = baseUrl+page;
        }

        vm.login = function(username, pass){
            vm.errorMsg = false;
            if(localStore.getItem("Username") === username && localStore.getItem("Password") === pass){
                localStore.setItem('LoginStatus', 1);
                vm.navigate('home');
            }else{
                vm.errorMsg = true;
            }
        }

    }
})();