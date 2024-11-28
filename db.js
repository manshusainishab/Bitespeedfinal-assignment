const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    port: process.env.port,
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