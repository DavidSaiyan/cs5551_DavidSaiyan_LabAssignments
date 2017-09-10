(function () {
    'use strict';

    angular
        .module('app')
        .directive('test', test);

    test.$inject = ['$rootScope', '$window'];

    function test($rootScope, $window) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/test.directive.html',
            link: link
        };

        function link(scope){
                var store = window.localStorage;



            scope.variable1 = store.getItem('LoginProvider');
        }
    }
})();