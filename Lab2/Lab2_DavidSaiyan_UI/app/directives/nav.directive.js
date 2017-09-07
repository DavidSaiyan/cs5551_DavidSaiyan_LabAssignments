(function () {
    'use strict';

    angular
        .module('app')
        .directive('menuNav', navigation);

    navigation.$inject = ['$window', 'baseUrl'];

    function navigation($window, baseUrl) {
        return {
            restrict: 'E',
            scope: {
              loggedIn: '=isLoggedIn'
            },
            templateUrl: 'app/directives/nav.directive.html',
            link: link
        };

        function link(scope){

            scope.fname = 'David';
            scope.lname = 'Saiyan';
            scope.password = ''

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

        }
    }
})();