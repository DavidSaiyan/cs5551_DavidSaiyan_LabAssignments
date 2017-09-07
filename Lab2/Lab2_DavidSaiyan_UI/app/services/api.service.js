(function () {
    'use strict';

    angular
        .module('app')
        .factory('ApiService', apiService);

    apiService.$inject = ['$http', 'ApiUrl'];

    function apiService($http, apiUrl) {
        var factory = {
            //add variables and function names here so you can access them from outside calls
            // format is:   'outer-name : local-name' 

            getGoals: getGoals
        };
        return factory;

        function getGoals(userId) {
            return $http({ url: apiUrl + 'user/goals/get?userId=' + userId }).then(function (response) {
                return response.data.Goals;
            });
        }
    }
})();