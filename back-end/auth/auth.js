const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const express = require("express");
const mongoose = require("mongoose");

const Umodel = require("../models/user");
const User = Umodel.user;

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


// ~~~~~~~~~~~~~~~~~~~~~ SIGN UP middleware
passport.use('register', new localStrategy(
    {
      usernameField: 'contact[profEmail[value]]',
      passwordField: 'personal[password]',
      passReqToCallback: true
    }, async(req, email, password, done) =>{
        try{
          // console.log('REQ: ', req.body)
          const user = new User(req.body);
          // console.log('edw')
          await user.save();
          // console.log('edw')
          return done(null, user, {message: 'Επιτυχής Εγγραφή'});
        }
        catch(error){
          // console.log('aaaa')
          return done(error, null , {message: 'Σφάλμα'});
        }
    }
));


// ~~~~~~~~~~~~~~~~~~~~~
passport.use('login', new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    }, async (email, password, done) => {
    try {
        // Find user in the db
            // console.log('email: ', email)
            // console.log('pass: ', password)
        const user = await User.findOne( {"contact.profEmail.value":email });
        // If no such user
        if (!user) {
            console.log('Ο χρήστης ΔΕΝ βρέθηκε.')
          return done(null, false, { message: 'Ο χρήστης δεν βρέθηκε.' });
        }
  
        // Confirm password is valid
        const validate = await user.isValidPassword(password);
        console.log('val: ', validate)
        // If wrong password
        if (!validate) {
          return done(null, false, { message: 'Λάθος κωδικός πρόσβασης.' });
        }
  
        return done(null, user, { message: 'Η σύνδεσή σου ολοκληρώθηκε με επιτυχία.' });
      } catch (error) {
        return done(error, null, { message: 'Προέκυψε σφάλμα.' });
      }
    })
  );

// Passport-jwt authentication strategy
passport.use(new JWTstrategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    passReqToCallback: true
  }, async (req, payload, done) => {
    // Find user in the db
      User.findOne({ _id: payload.sub })
      .then((user) => {
        if(user) {
          // req.user will be used in '../routes/secure-routes'
          req.user = user;
          return done(null, user, { message: 'Επιτυχής έλεγχος ταυτότητας.' });
        } else {
          return done(null, false, { message: 'Δεν βρέθηκε τέτοιος χρήστης.' });
        }
      })
      .catch(error => done(error, null, { message: 'Προέκυψε σφάλμα.' }));
  })
);