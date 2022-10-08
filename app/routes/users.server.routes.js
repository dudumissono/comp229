const userController = require('../controllers/users.server.controller');

module.exports = function (app) {
    app.route('/users')
        // .post(userController.create)
        .get(userController.list);
}