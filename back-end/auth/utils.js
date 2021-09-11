const jwt = require('jsonwebtoken');
const { User } = require("../models/user");

// Create an authentication token
function issueJWT(user) {
  const _id = user._id;
  const expiresIn = '1d';   // 1 day

  const payload = {
    sub: _id,
    iat: Date.now()
  };
  const signedToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: expiresIn });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn
  }
}

// Extract the token of the user that made a request
function extractToken(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      return req.headers.authorization.split(' ')[1];
    }
    return null;
  }
  
  
  module.exports.issueJWT = issueJWT;
  module.exports.extractToken = extractToken;