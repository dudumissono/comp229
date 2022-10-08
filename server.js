process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configMongoose = require('./config/mongoose');
const configExpress = require('./config/express');

const db = configMongoose();
const app = configExpress();

let HOST = 'localhost';
let PORT = 3001;

app.listen(PORT);

console.log(`Server running at http://${HOST}:${PORT}`);

module.exports = app;