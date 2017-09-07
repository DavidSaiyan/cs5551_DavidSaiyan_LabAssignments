(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', main);

    main.$inject = ['$scope', '$http', '$log'];

    function main($scope, $http, $log) {
        var vm = this;


        $log.debug("[Loaded Main Controller]");


    }
})();