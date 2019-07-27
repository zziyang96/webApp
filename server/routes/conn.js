
//import mysql
const mysql = require('mysql');

// create connection
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'vuems'
});


module.exports = connection;

//
//connection.connect();