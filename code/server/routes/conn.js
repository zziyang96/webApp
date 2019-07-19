
//import mysql
const mysql = require('mysql');

// create connection
var connection = mysql.createConnection({
    host:'localhose',
    user:'root',
    password:'root',
    database:'vuems'
});


module.exports = connection;

//
//connection.connect();