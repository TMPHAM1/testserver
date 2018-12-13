module.exports = 
function(app, db) {
    var User = require('./models/userModels.js')

    app.get("/addUser", (req, res) => {
        console.log("adding User"); 
        User.create({username: "tmpham1", email: "tmpham1@uci.edu", password: "encryptedpassword"}, function (err,users) {
            console.log("successfully added");
        }) 

        
    })
    app.get("/checkLogin", (req, res) => {
        User.find({"username": "tmpham2", "password": "encryptedpassword"}, function (err,users) {
            if (err) {
                console.log(err);
            }
            if (users.length === 0) {
                User.find({"email": "tmpham1@uci.edu", "password": "encryptedpassword"}, function(err,emailCheck) {
                    if (emailCheck) {
                        console.log("email login successful");
                    }
                    else {
                        console.log("no users exists");
                    }
                }) 
                }
            else 
                console.log(" username login sucessful")
            
            
            
            
        });
        console.log("checking login status"); 
    })
}