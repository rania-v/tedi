const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const passport = require("passport");
const utils = require('../auth/utils');
const {serUser} = require('../serializer');

// const User_module;
const { user, frequest} = require("../models/user");

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get User
router.post("/", async (req, res)=>{
  try{
    console.log(req.body)
    // console.log
      let targetUser = await user.findById(req.body.userId);
      targetUser = await serUser(targetUser);
      console.log('targ: ', targetUser)
      res.json({
          user:targetUser
      });
  }catch(error){
      res.status(400).json({message: error});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Register new User
router.post("/register", async(req, res, next) =>{
    passport.authenticate('register',{session:false},
    async (err, user, info)=>{
      try{
        if(err || !user){
          // console.log('user: ', user, " err: ", err, ' info: ', info);
          return res.status(500).json({message: 'Σφάλμα'})
        }
        console.log('req: ', req);
        return res.json({
            message: 'Επιτυχής Εγγραφή !!',
            user: user,
            // user: req.user
        });
      }
      catch(err){
        console.log("err: ", err);
        return next({message: err});
      }
    })(req, res, next);
})

// router.post("/register", async (req, res)=>{
//         console.log('mpla');
//         res.json({
//             message: 'Επιτυχής Εγγραφή !!',
//             user: req.user
//         });
// })

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