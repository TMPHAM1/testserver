module.exports = 
function(app, db) {
    var User = require('./models/userModels.js')

    app.get("/addUser", (req, res) => {
        res.send("adding User"); 
        User.create({username: "tmpham1", email: "tmpham1@uci.edu", password: "encryptedpassword"}, function (err,users) {
            res.send("successfully added");
        }) 

        
    })
    app.get("/checkLogin", (req, res) => {
        User.find({"username": "tmpham2", "password": "encryptedpassword"}, function (err,users) {
            if (err) {
                res.send(err);
            }
            if (users.length === 0) {
                User.find({"email": "tmpham1@uci.edu", "password": "encryptedpassword"}, function(err,emailCheck) {
                    if (emailCheck) {
                        res.send("email success");
                    }
                    else {
                        res.send("no users exists");
                    }
                }) 
                }
            else 
                res.send(" username login sucessful");
            
            
            
            
        });
        res.send("checking login status"); 
    })
}