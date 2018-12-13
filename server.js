var express = require('express');
var app = express();
var port = process.env.port || 5000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require('./config/db');
var routes = require('./routes');

var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(dbConfig.url, {urlNewUrlParser: true}
 )

db.on("error", function(err) {
    if (err) throw err;
    console.log("Error");
})

db.once("open", function() {
    console.log("successful Connection");
    routes(app, db);
}) 



routes(app);

app.listen(port, ()=> {
    console.log("Listening on Port: ", port);
});
