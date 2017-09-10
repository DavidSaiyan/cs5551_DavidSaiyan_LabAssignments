(function () {
    'use strict';

    angular
        .module('app')
        .factory('YoutubeService', youtubeService);

    youtubeService.$inject = ['$http', 'ApiKey'];

    function youtubeService($http, apiKey) {
        var factory = {
            SearchYoutube: SearchYoutube
        };
        return factory;

         function SearchYoutube(text) {
             $http.get('https://www.googleapis.com/youtube/v3/search', {
                 params: {
                     key: apiKey,
                     type: 'video',
                     maxResults: '10',
                     pageToken: '',
                     part: 'id,snippet',
                     fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
                     q: text
                 }
             }).then(function(response) {
                 console.log(response);
                 if (response.data.items.length === 0) {
                     return 'The search did not return any results'
                 }else{
                     return response.data.items;
                 }
             }, function(error){
                 console.log(error);
                 return error.data.error.errors.message;
             });
         }
    }
})();