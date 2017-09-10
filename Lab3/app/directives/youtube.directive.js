(function () {
    'use strict';

    angular
        .module('app')
        .directive('youtubeSearch', youtubeSearch);

    youtubeSearch.$inject = ['$http', 'YoutubeService'];

    function youtubeSearch($http, youtubeService) {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/youtube.directive.html',
            link: link
        };

        function link(scope){
            scope.searchText = '';
            scope.searchResults = [];

            scope.search = function(text){
                scope.searchResults = youtubeService.SearchYoutube(text);
                console.log(scope.searchResults);
            }
        }
    }
})();