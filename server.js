var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var petfinder = require('petfinder')('14614b2ec6590088e2c02f050810225b','f52ff8c8614f270a0d7ad18d923d5c00');
var app = express();
mongoose.Promise = global.Promise
app.use(bodyParser.json());

// static content
app.use(express.static( __dirname + '/angular/dist' ));
mongoose.connect('mongodb://localhost/bb_mean');

//
// petfinder.getBreedList('cat', function(err, breeds) {
//   console.log(breeds)
// });

// petfinder.getRandomPet('full', function(err, data) {
//   console.log(data)
// });





app.all("*", (req, res, next) => { res.sendFile(path.resolve("./angular/dist/index.html"))});

// listen on this port
app.listen(8000, function(){
    console.log("you are browsin' on port 8000");
})
