(function () {
    'use strict';

    angular
        .module('app')
        .directive('search', search);

    search.$inject = ['SearchService'];

    function search(searchService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/search.directive.html',
            link: link
        };

        function link(scope){
            scope.searchText = '';
            scope.searchResults = [];
            scope.tranlsatedKeyword = '';

            scope.languageOptions = [
                {language: 'English',   value: 'en'},
                {language: 'Spanish',   value: 'es'},
                {language: 'French',    value: 'fr'},
                {language: 'German',    value: 'de'},
                {language: 'Hindu',     value: 'hi'}];

            scope.selectedLanguage = scope.languageOptions[0];

            scope.search = function(text, lang){
                searchService.Search(text, lang).then(function(response){
                    scope.searchResults = response;
                    console.log(scope.searchResults);
                });
            }
        }
    }
})();