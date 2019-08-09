var express = require('express');
var router = express.Router();
// var mysql = require('mysql');
var $sql = require('./sqlMap');

//import database module
const connection = require('./conn');

//conect to database
connection.connect(() => {
  console.log('Database connected successful!')
})




//  receive login request, response back
router.post('/checklogin',(req, res) => {

  //reveice username and password request
  let {email, password} = req.body;

  //check if username and password exist in database
  const sqlStr = `select * from users where email = "${email}"and password = "${password}"`
  console.log(sqlStr);
  connection.query(sqlStr, (err, data) => {
    if (err){
      throw err;
    } 
    if (data[0] === undefined){
      res.send('-1')
    }else{
      res.send(data)
    }
    // connection.release();
  })
});

//异常处理，登录成功跳转 ，登录失败 错误处理等，
//....代码

//get userlist request
router.get('/getuserlist',(req,res) => {
  const sqlStr = "select * from users";
  connection.query(sqlStr, (err, result) =>{
    if(err){
      throw err;
    }else {
      res.send(result);
    }
    // connection.release();
  })
});

// add new user
router.post('/addUser', (req, res) => {
  var params = req.body;
  console.log(params);
  const sqlStr = "insert into users (username, password, realname, sex, telphone, email, idType, department, branch) values (?,?,?,?,?,?,?,?,?)"
  connection.query(sqlStr, [params.username, params.password, params.realname, params.sex, params.telphone, params.email, params.idType, params.department, params.branch], (err, result)  => {
      if (err) {
        throw err;
      }else{
        res.send(result);
      }
  })
});

//delete users
router.post('/deleteUser',(req,res) => {
  var params = req.body;
  const sqlStr = "delete from users where id = ?"
  connection.query(sqlStr,[params.username, params.password, params.realname, params.sex, params.telphone, params.email, params.idType, params.department, params.branch],(err,result) =>{
    if(err){
      throw err;
    }else {
      res.send(result);
    }
  })
});

//update users information
router.post('/updateUser',(req,res) =>{
  var sql_update = $sql.users.update_user;
  var params = req.body;
  if(params.id) {
    sql_update += 
      " username = '" + params.username +
      "',password = '" + params.password +
      "',realname = '" + params.realname +
      "',sex = '" + params.sex +
      "',telphone = '" + params.telphone +
      "',email = '" + params.email +
      "',idType = '" + params.idType +
      "',department = '" + params.department +
      "',branch = '" + params.branch +
      "' where id ='"+ params.id + "'";
  }
  connection.query(sql_update,params.id, function(err, result) {
    if(err){
      console.log(err)
      throw error;
    }
    console.log(result);
    if (result.affectedRows === undefined) {
      res.send('information update fail, contact admin')
    }else {
      res.send('ok')
    }
  })
});

// update users password
router.post('/changePassword', (req,res) => {
  var sql_changepw = $sql.users.update_user;
  var params = req.body;
  console.log(params);
  if(params.id) {
    sql_changepw += 
      " password = '" + params.newpassword +
      "' where id ='"+ params.id + "'";
      console.log(sql_changepw)
  }
  connection.query(sql_changepw, params.id, function(err, result) {
    if(err){
      console.log(err)
      throw err;
    }
    if(result.affectedRows === undefined) {
      res.send('password change fail, contact admin')
    } else {
      res.send('ok');
    }
  })
});



module.exports = router;

