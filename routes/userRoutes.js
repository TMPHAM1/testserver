module.exports = 
function(app, db) {
    var User = require('./models/userModels.js')

    app.get("/addUser", (req, res) => {
        res.send("adding User"); 
        User.create({username: "tmpham1", email: "tmpham1@uci.edu", password: "encryptedpassword"}, function (err,users) {
            res.send("successfully added");
        }) 

        
    })
    app.post("/checkLogin", (req, res) => {
        const output = {
            success: false,
        };
        const {username, password} = req.body;

       const userCheck = User.find({"username": `${username}`, "password": `${password}`}, function (err,users) {
            if (users.length > 0) {
                output.success = true;
                res.send(output);
            }
           
            // if (users.length === 0) {
                
               
            // else {
            //     output.success = true;
            // }  
        }).then(function(user) { 
            if (user.length === 0) { 
                User.find({"email": `${username}`, "password": `${password}`}, function(err,emailCheck) {
                    var num = emailCheck.length
                    var output = {
                        success: false,
                    };
                if (num > 0) {
                   output["success"] = true;
                   res.send(output);
                }
                else {
                   output["error"] = "No Users Found";
                   res.send(output);
                }
            
            }) 
            

            }
        } )

    })
}