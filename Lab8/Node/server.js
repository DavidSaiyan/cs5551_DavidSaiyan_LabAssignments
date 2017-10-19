// Set up packages and imports
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var translateSearch = require('./app/controllers/translatedSearch');

//Configure App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var port = process.env.PORT || 8080;
var router = express.Router();

// Routing Middleware
router.use(function(req, res, next) {
    //console.log("req");
    next();
});

router.get('/search/:word/:language', function(req, res) {
    translateSearch.Search(req.params.word).then(
        function (response) {
            translateSearch.Translate(response, req.params.language).then(
                function (response) {
                    res.type('application/json');
                    console.log(response);
                    res.send(response);
                }, function (error) {
                    res.send(error);
                }
            );
        }, function (error) {
            res.send(error);
        }
    );
});

router.get('/', function(req, res) {
    res.json({msg: 'lab 8 api!'})
});


//Register Routes
app.use('/api', router);

//Start Server
app.listen(port);
console.log('Application Port is:  ' + port);
