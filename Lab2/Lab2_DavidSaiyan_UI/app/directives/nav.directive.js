(function () {
    'use strict';

    angular
        .module('app')
        .directive('menuNav', navigation);

    navigation.$inject = ['$window', 'baseUrl'];

    function navigation($window, baseUrl) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/nav.directive.html',
            link: link
        };

        function link(scope){

            var localStore = window.localStorage;

            scope.loggedIn = localStore.getItem("LoginStatus");
            scope.fname = localStore.getItem("FirstName");
            scope.lname = localStore.getItem("LastName");

            scope.menuItems = [
                {Text:  'Login',    Url: 'login'},
                {Text:  'Register', Url: 'register'},
                {Text:  'Home',     Url: 'home'},
                {Text:  'Main',     Url: 'main'}];


            scope.navigate = function(page){
                $window.location.href = baseUrl+page;
            }

            scope.getFullName = function() {
                return scope.fname + " " + scope.lname;
            }

            scope.signOut = function(){
                localStore.removeItem('LoginStatus');
                scope.loggedIn = 0;
                scope.navigate('login');
            }

        }
    }
})();