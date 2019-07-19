var express = require('express');
var router = express.Router();

//import database module
const connection = require('./conn');

//conect to database
connection.connect(() => {
  console.log('Database connected successful!')
})

//  receive login request, response back
router.post('/checklogin',(req, res) => {

  //reveice username and password request
  let {username, password} = req.body;

  //check if username and password exist in database
  const sqlStr = `select * from users where username ='${username}' and password ='${password}'`
  connection.query(sqlStr, (err, data) => {
    if (err){
      throw err;
    } else{
      res.send(data)
    }
    connection.release();
  })
})

//异常处理，登录成功 跳转 ，登录失败 错误处理等， 登录拦截等
//....代码

//get userlist request
router.get('/getuserlist',(req,res) => {
  // check database, return all user datas to font
  const sqlStr = "select * from users";
  connection.query(sqlStr, (err, data) =>{
    if(err){
      throw err;
    }else {
      res.send(data);
    }
    connection.release();
  })
  
})

module.exports = router;

