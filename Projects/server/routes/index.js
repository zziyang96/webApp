var express = require('express');
var router = express.Router();


// reveice login request 
router.post('/checklogin', (req, res) => {
  //receive username and password
  let {username, password} = req.body;

  console.log(username, password);
  res.send('1')
})

module.exports = router;
