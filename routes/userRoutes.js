module.exports =
    function (app, db) {
        var User = require('./models/userModels.js')

        app.post("/addUser", (req, res) => {
            const {name, username, email, password} = req.body; 
            console.log(name);
            User.create({
                name: name,
                username: username,
                email: email,
                password: password,
            }, function (err, users) {
                res.send("successfully added");
            })


        })
        app.post("/checkLogin", (req, res) => {
            const output = {
                success: false,
            };
            const {
                username,
                password
            } = req.body;

            const userCheck = User.find({
                "username": `${username}`,
                "password": `${password}`
            }, function (err, users) {
                if (users.length > 0) {
                    output.success = true;
                    res.send(output);
                }

                // if (users.length === 0) {


                // else {
                //     output.success = true;
                // }  
            }).then(function (user) {
                if (user.length === 0) {
                    User.find({
                        "email": `${username}`,
                        "password": `${password}`
                    }, function (err, emailCheck) {
                        var num = emailCheck.length
                        var output = {
                            success: false,
                        };
                        if (num > 0) {
                            output["success"] = true;
                            res.send(output);
                        } else {
                            output["error"] = "No Users Found";
                            res.send(output);
                        }

                    })


                }
            })

        })
        app.get("/addLevel", (req, res) => {
            User.updateOne({_id: "5c11ac00f9009619b420f976"},{$set: 
                {level: 2}}, function(err, users) {
                    if (err) throw err;
                    if (users.n === 0) {
                        console.log("Unable to set level");
                    }
                    else {
                        console.log("New Level Set")
                    }
                
            })
        })
    }