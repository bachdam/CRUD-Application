// get the client
//const mysql = require('mysql2');
import mysql from 'mysql2/promise';
// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsbasic'
// });

//const mysql = require("mysql2/promise");

console.log("Creating connection pool...")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic',
    //password: 'password'
})


// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//     console.log('>>>check my sql');
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => { return row.id});
//     console.log(rrows);
//   }
// );

export default pool;
