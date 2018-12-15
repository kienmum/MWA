var key = require('../config/key');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const auth = {
    verifyToken: verifyJWTToken,
    createToken : createJWToken
}

function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key.tokenKey, function(err, user) {
            if (err)  {
                reject(err)
            } else {
                resolve(user);
            }
        });
    });
}

function createJWToken(user) {
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    var token = jwt.sign({ username: user.username }, key.tokenKey, {
        expiresIn: 86400 // expires in 24 hours
      });
  return token;
}

module.exports = auth;