const connection = require('./connection');

const rooms = {
    findAll() {
        return connection.query('SELECT * FROM rooms');
    }
}

module.exports = rooms;