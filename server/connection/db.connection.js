const mysql = require('mysql2');

const poot = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'erd'
})

const db = poot.promise();
module.exports = db;