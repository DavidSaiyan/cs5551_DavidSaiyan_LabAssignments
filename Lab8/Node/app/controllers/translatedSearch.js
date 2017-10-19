var google     = require('../services/google');
var translate = require('../services/language');

function Search(text){
    console.log('Called Search and Translate ');
    return google.googleRequest(text).then(
        function(response){
            //console.log(response);
            response = JSON.parse(response);
            var items = response.itemListElement;
            return items;
        }, function (error){
            console.log(error);
            return error;
        }
    );
}


function Translate(items, language) {
    var results = [];
    var promises = [];
    //console.log(items);
    return new Promise(function (resolve, reject) {
        try {
            for (var i = 0; i < items.length - 1; i++) {
                //console.log(typeof items[i].result.description);
                var name = items[i].result.name;
                var description = items[i].result.description !== undefined ? items[i].result.description : items[i].result.name;
                promises.push(translate.TranslateText([name, description, i], language).then(
                    function (response) {
                        //console.log(response);
                        name = response.text[0];
                        description = response.text[1];
                        counter = response.text[2];
                        results.push({
                            Count: response.text[2],
                            Original: {
                                Text: items[counter].result.name,
                                Description: items[counter].result.description
                            }, Translated: {Text: name, Description: description}
                        });
                    }, function (error) {
                        console.log(error);
                        reject(error);
                    }
                ))
            }
            Promise.all(promises).then(function(){
                resolve(results);
            })
        }
        catch
            (e) {
            console.log(e);
            reject(e);
        }
    })
}

module.exports =  {
    Translate: Translate,
    Search: Search
};
