
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



//database tables


//用户列表
// create table users(
//     id int primary key auto_increment,
//     username varchar(50),
//     password varchar(32),
//     realname varchar(50),
//     sex varchar(10),
//     telphone varchar(50),
//     email varchar(50),
//     idType varchar(50),
//     department varchar(50),
//     branch varchar(50)
//   );
 
//物料种类
//   create table categories(
//     id int primary key auto_increment,
//     category varchar(50),
//     description varchar(255)
//   );

//生产商
//   create table manufacturers(
//     id int primary key auto_increment,
//     manufacturer varchar(50),
//     productname varchar(50),
//     productmodel varchar(50),
//     productprice int
//   );

//物料信息
//   create table materials(
//     id int primary key auto_increment,
//     description varchar(255),
//     manufacturerId int, 
//     categoryId int,
//     recorderId int,
//     quantity int default 1,
//     create_time timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
//     update_time timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
//     status enum ('已录入','已借出','采购中'),
//     foreign key (manufacturerId) references manufacturers(id),
//     foreign key (categoryId) references categories(id),
//     foreign key (recorderId) references users(id)
//   );

//物料录入信息
//   create table materialadd_user(
//     id int primary key auto_increment,
//     recorderId int,
//     materialId int,
//     categoryId int,
//     manufacturerId int,
//     time_in datetime,
//     foreign key (manufacturerId) references manufacturers(id),
//     foreign key (categoryId) references categories(id),
//     foreign key (materialId) references materials(id),
//     foreign key (recorderId) references users(id)
//   );

//物料提出信息
//   create table materialout_user(
//     id int primary key auto_increment,
//     recorderId int,
//     materialId int,
//     categoryId int,
//     manufacturerId int,
//     time_out datetime,
//     foreign key (manufacturerId) references manufacturers(id),
//     foreign key (categoryId) references categories(id),
//     foreign key (materialId) references materials(id),
//     foreign key (recorderId) references users(id)