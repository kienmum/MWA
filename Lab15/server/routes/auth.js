var express = require('express');
var router = express.Router();
const auth = require('../libs/auth');

router.post('/signup', function(req, res, next) {

  const { fullname, email, password } = req.body;

  let user = { fullname, email, password };
  //console.log(user);
  //let token = auth.createToken(user);
  res.status(200).json({
    "status": "success"
  });



});

router.post('/login', function(req, res, next) {

  const { username, password } = req.body;
  let user = { username,password }
  let userExist = true; // logic to check user existance

  if(userExist) {
    let token = auth.createToken(user);
    res.status(200).json({
      "status": "success",
      "token": token
    });
  } else {
    res.status(200).json({
      "status": "fail",
      "message": "username and/or password incorrect!"
    });
  }
});

module.exports = router;
