const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport");
const utils = require('../auth/utils');


// const User_module;
const User_module = require('../models/user');
const User = User_module.user

mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        // autoIndex: true
    }
)
.catch( error => console.log(error.message) );

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Register new User
router.post("/register",
    passport.authenticate('register', {session: false}),
    async (req, res)=>{
        console.log('mpla');
        res.json({
            message: 'Επιτυχής Εγγραφή !!',
            user: req.user
        });
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Log in
router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
      try {
        console.log(user)
        // If there was an error
        if (err || !user) {
          res.statusCode = 500
          return res.status(400).json({ message: info.message });
        }
  
        // Create user's authentication token
        const tokenObject = utils.issueJWT(user);
  
        // Get serialized user
        // const context = await serializer.userSerializer(user);
        console.log('messg: ', info.message)
        return res.json({
          message: info.message,
          user: user,
          token: tokenObject
        });
      } catch (error) {
        return next({ message: error });
      }
    })(req, res, next);
  });
  

module.exports = router;