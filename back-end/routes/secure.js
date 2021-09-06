const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const utils = require('../auth/utils');

const {invalidToken} = require('../models/token');
const { user } = require("../models/user");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Log out
router.get('/logout', async(req, res) => {
    try {
        // save token to invalid tokens schema until it expires
      const token = new invalidToken({ value: utils.extractToken(req) });
      await token.save();
      
      req.logout();
      res.json({ message: 'Επιτυχής αποσύνδεση.' });
    } catch (error) {
      res.json({ message: error });
    }
  });


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update User Settings
router.post('/update-user-settings', async(req, res) =>{
  try{
    const targetUser = await user.findById(req.user._id);

    if(req.body.pass_for_check){
      const validate = await targetUser.isValidPassword(req.body.pass_for_check);

      // If wrong password
      if (!validate) {
        return res.json({ message: 'Λάθος κωδικός επιβεβαίωσης.' });
      }

      targetUser.personal.password = req.body.new_pass;
      await targetUser.save();
    }

    if(req.body.new_email){
      targetUser.contact.profEmail = req.body.new_email;
      await user.findByIdAndUpdate(targetUser._id, {contact: targetUser.contact}, {runValidators: true})
    }

    res.json({message: 'Το προφίλ χρήστη ενημερώθηκε'})
  }catch(err){
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update User Personal Info
router.post('/update-user-personal', async(req, res) =>{
  try{
    const targetUser = await user.findById(req.user._id);

    // console.log(targetUser.personal);

    if(req.body.first_name){
      targetUser.personal.firstName = req.body.first_name;
    }

    if(req.body.last_name){
      targetUser.personal.lastName = req.body.last_name;
    }

    if(req.body.profession){
      targetUser.personal.profession = req.body.profession;
    }

    if(req.body.birth_day){
      const date = req.body.birth_day + ' ' + req.body.birth_month + ' ' + req.body.birth_year;
      targetUser.personal.birthday = date;
    }

    if(req.body.country){
      targetUser.personal.country = req.body.country;
    }

    // console.log(targetUser.personal);

    await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal}, {runValidators: true})
    res.json({message: 'Οι προσωπικές πληροφορίες του χρήστη ενημερώθηκαν'})

  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update User Personal Info
router.post('/update-user-contact', async(req, res) =>{
  try{
    const targetUser = await user.findById(req.user._id);
    
    // console.log(targetUser.contact);

    if(req.body.prof_mail){
      targetUser.contact.profEmail = req.body.prof_mail;
    }

    if(req.body.per_mail){
      targetUser.contact.perEmail = req.body.per_mail;
    }

    if(req.body.telephone){
      targetUser.contact.phoneNum = req.body.telephone;
    }

    // console.log(targetUser.personal);

    await user.findByIdAndUpdate(targetUser._id, {contact: targetUser.contact}, {runValidators: true})
    res.json({message: 'Οι πληροφορίες επικοινωνίας του χρήστη ενημερώθηκαν'})

  }catch(err){
    res.json({message: err});
  }
})

module.exports = router;