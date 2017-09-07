(function () {
    'use strict';

    angular
        .module('app')
        .service('TemplateService', template);

    template.$inject = ['$http', '$log'];

    function template($http, $log) {
        //make requests here
    }
})();