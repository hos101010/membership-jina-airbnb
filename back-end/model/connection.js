const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host     : '',
    user     : '',
    password : '',
    port     : 3306,
    database : ''
});


module.exports = connection;