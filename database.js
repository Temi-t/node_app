// var mysql = require('mysql');
// //connection
// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'user1',
//     password: '123456',
//     database: 'node_app'
// });

// conn.connect((err) => {
//     if(err) throw err;
//     console.log('Database connected...')
// });

// module.exports = conn;

var mysql = require('mysql');
//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'user1',
    password: '123456',
    database: "node_app",
});

//connect
db.connect((err) => {
    if(err) throw err;
    console.log('mysql db connected...')
});
module.exports = db;