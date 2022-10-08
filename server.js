process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configMongoose = require('./config/mongoose');
const configExpress = require('./config/express');

const db = configMongoose();
const app = configExpress();

let HOST = 'localhost';
let PORT = 3001;

// app.use('/', function(req, res) {
//     console.log(`The request URL is ${req.url}`);
//     console.log(`The request body is ${req.body}`);
//     console.log(`The request hostname is ${req.hostname}`);
//     res.send('Hello Dudu 21');
// });

// let hasName = function (req, res, next) {
//     if (req.param('name')){
//         next();
//     } else {
//         res.send('what is your name?');
//     }
// }
//
// let sayHello = function (req, res, next) {
//     res.send(`My name is ${req.param('name')}`);
// }
//
// app.get('/', hasName, sayHello);

app.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}`);

module.exports = app;