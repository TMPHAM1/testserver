var login = require('./userRoutes');

module.exports = function(app, db) {
    login(app, db);
}