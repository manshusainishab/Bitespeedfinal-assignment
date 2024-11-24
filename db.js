const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: process.env.Password,
    database: process.env.Database
});

pool.getConnection((err) => {
    if(err){
        console.error('Error connecting to datbase: ', err.message);
    } else {
        console.log('Connected to database.')
    }
})

module.exports = pool.promise(); 