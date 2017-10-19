(function () {
    'use strict';

    angular
        .module('app')
        .factory('SearchService', searchService);

    searchService.$inject = ['$http', 'NodeApi'];

    function searchService($http, nodeApi) {
        var factory = {
            Search: Search
        };
        return factory;

         function Search(text, language) {
             return $http.get(nodeApi + 'search/' + text + '/' + language, {
             }).then(function(response) {
                 console.log(response);
                 if (response.data.length === 0) {
                     return 'The search did not return any results'
                 }else{
                     return response.data;
                 }
             }, function(error){
                 console.log(error);
                 return error.message;
             });
         }
    }
})();