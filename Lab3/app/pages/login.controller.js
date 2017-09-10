(function () {
    'use strict';

    angular
        .module('app')
        .controller('Login', login);

    login.$inject = ['$rootScope', '$scope', '$http', 'baseUrl', '$window'];

    function login($rootScope, $scope, $http, baseUrl, $window) {
        var vm = this;

        var localStore = window.localStorage;

        vm.username = '';
        vm.password = '';
        vm.errorMsg = false;

        vm.navigate = function(page){
            $window.location.href = baseUrl+page;
        }

        if(localStore.getItem("LoginStatus") == 1){
            vm.navigate('home');
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