var $http = require('request-promise');
var yandexApiKey = 'trnsl.1.1.20170910T161710Z.c0e09bd17009752c.21b27966b112436681585426dd9fbd1b31ba0314';

 function TranslateText(text, language) {
     var textString = '';
     for(var i = 0; i< text.length; i++){
         textString += '&text=' + text[i];
     }
     console.log(textString);
     return $http({
         method: 'GET',
         url: 'https://translate.yandex.net/api/v1.5/tr.json/translate?' + 'key=' + yandexApiKey + textString + '&lang=' + language
     }).then(function(response) {
            return JSON.parse(response);
     }, function(error){
            console.log(error);
            return error.statusText;
     });
 }

 module.exports = {
     TranslateText: TranslateText
 }
