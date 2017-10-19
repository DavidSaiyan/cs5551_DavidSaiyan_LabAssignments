(function () {
    'use strict';

    angular
        .module('app')
        .directive('menuNav', navigation);

    navigation.$inject = ['$rootScope', '$window', 'baseUrl', 'socialLoginService'];

    function navigation($rootScope, $window, baseUrl, socialLoginService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/nav.directive.html',
            link: link
        };

        function link(scope){

            var localStore = window.localStorage;
            scope.userAvater = null;
            scope.name = null;
            scope.email = null;

            console.log('loaded nav-bar');


        }
    }
})();