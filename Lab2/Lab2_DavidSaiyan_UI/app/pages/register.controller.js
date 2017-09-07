(function () {
    'use strict';

    angular
        .module('app')
        .controller('Register', register);

    register.$inject = ['$scope', '$http', '$log', 'baseUrl', '$window'];

    function register($scope, $http, $log, baseUrl, $window) {
        var vm = this;

        var localStore = window.localStorage;

        vm.fname = '';
        vm.lname = '';
        vm.password = '';
        vm.username = '';
        vm.errorMsg = false;
        vm.successMsg = false;

        vm.navigate = function(page){
            $window.location.href = baseUrl+page;
        }

        vm.register = function(){
            vm.errorMsg = false;
            if(isFormFilled()){
                localStore.setItem('FirstName', vm.fname);
                localStore.setItem('LastName', vm.lname);
                localStore.setItem('Username', vm.username);
                localStore.setItem('Password', vm.password);
                vm.successMsg = true;
            }else{
                vm.errorMsg = true;
            }
        }

        function isFormFilled(){
            if(vm.fname === '' || vm.lname === '' || vm.password === '' || vm.username === ''){
                return false;
            }else{
                return true;
            }
        }
    }
})();