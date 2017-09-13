(function () {
    'use strict';

    angular
        .module('app')
        .directive('youtubeSearch', youtubeSearch);

    youtubeSearch.$inject = ['YoutubeService', 'TranslateService'];

    function youtubeSearch(youtubeService, translateService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/youtube.directive.html',
            link: link
        };

        function link(scope){
            scope.youtubeLink = 'https://www.youtube.com/watch?v=';
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

            scope.search = function(text){
                //Translate keyword to selected language
                translateService.TranslateText(text, scope.selectedLanguage.value).then(function(response){
                    scope.tranlsatedKeyword = response.data.text[0];
                });
                youtubeService.SearchYoutube(text).then(function(response){
                    if(scope.selectedLanguage.value != 'en'){
                        angular.forEach(response, function(val){
                            //Translate youtube results to selected language
                            translateService.TranslateText(val.snippet.title, scope.selectedLanguage.value).then(function(response){
                                val.snippet.title = response.data.text[0];
                            });
                            translateService.TranslateText(val.snippet.description, scope.selectedLanguage.value).then(function(response){
                                val.snippet.description = response.data.text[0];
                            })
                        })
                        }
                    scope.searchResults = response;
                   // console.log(scope.searchResults);
                });
            }
        }
    }
})();