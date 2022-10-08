const users = require('../controllers/users.server.controller');

module.exports = function (app) {
    app.route('/users')
        .post(users.create)
        .get(users.list);
}