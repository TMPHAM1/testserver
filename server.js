var express = require('express');
var app = express();
var port = process.env.port || 1337;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require('./config/db');
var routes = require('./routes');
const cors = require('cors')
app.use(cors());

var db = mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true}
 )

db.on("error", function(err) {
    res.send("error");
})

db.once("open", function() {
    
    routes(app, db);
}) 



routes(app);

app.listen(port, ()=> {
    console.log("Listening on Port: ", port);
});
