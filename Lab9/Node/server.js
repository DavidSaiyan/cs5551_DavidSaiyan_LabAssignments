// Set up packages and imports
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var translateSearch = require('./app/controllers/search');

//Configure App
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Retrieve
function connectToMongo(){
    // Connect to the db
    MongoClient.connect("mongodb://Lab9User:Lab9  Pass@ds125555.mlab.com:25555/ds-umkc", function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
    });
}

connectToMongo();

var port = process.env.PORT || 4000;
var router = express.Router();

// Routing Middleware
router.use(function(req, res, next) {
    //console.log("req");
    next();
});

router.get('/yelp/:terms/:language', function(req, res) {
    translateSearch.Search(req.params.word).then(
        function (response) {
            console.log(response);
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
