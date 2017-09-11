(function () {
    'use strict';

    angular
        .module('app')
        .factory('TranslateService', translateService);

    translateService.$inject = ['$http', 'Yandex_ApiKey'];

    function translateService($http, apiKey) {
        var factory = {
            TranslateText: TranslateText
        };
        return factory;

         function TranslateText(text, language) {
             return $http({
                 method: 'GET',
                 url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?' + 'key=' + apiKey + '&text=' + text + '&lang=' + language
             }).then(function(response) {
                return response;
             }, function(error){
                 console.log(error);
                 return error.statusText;
             });
         }
    }
})();