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
    usernameField: 'contact[profEmail]',
    passwordField: 'personal[password]',
    passReqToCallback: true
    }, async(req, username, password, done) =>{
        try{
            const user = new User(req.body);
            const saved = await user.save();
            done(null, user);
        }
        catch(error){
            done(error);
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
            console.log('email: ', email)
            console.log('pass: ', password)
        const user = await User.findOne({ contact:{profEmail: email} });
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