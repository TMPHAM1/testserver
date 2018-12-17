var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String, 
    }, 
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    level: {
        type: String,
    }
})

module.exports = mongoose.model('Users', UserSchema);