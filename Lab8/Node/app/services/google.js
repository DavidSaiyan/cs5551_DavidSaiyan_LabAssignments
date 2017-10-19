//Imports
var $http = require('request-promise');

//Variables
var googleApiKey = 'AIzaSyAfNW7uuzjiuecGWV9GCSB8_Dz9J7nh2N4';
var googleApiUrl = 'https://kgsearch.googleapis.com/v1/entities:search?query=';
var limit = 10;

function googleRequest(text){
    return $http(googleApiUrl + text + '&key=' + googleApiKey + '&limit=' + limit).then(
        function(response){
            return response;
        },
        function(error){
            return error;
        }
    )
}

module.exports = {
    googleRequest: googleRequest
};