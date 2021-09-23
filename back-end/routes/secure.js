const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const utils = require('../auth/utils');

const {invalidToken} = require('../models/token');
const { user, frequest} = require("../models/user");
const { chat } = require("../models/chat");

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Send Friend Request
router.post('/frequest', async(req, res) => {
  try{
    const user1 = req.user;
    const user2 = await user.findById(req.body.to_user);
    
    if(!user2){
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'});
    }

    // check if users are already friends
    const friends = user2.personal.friendsList.indexOf(user2._id);
    if(friends)
      res.json({message: 'Είστε ήδη φίλος με αυτόν τον χρήστη!'});

    const invite = new frequest();
    invite.from = user1._id;
    invite.to = user2._id;
    await invite.save();

    user2.personal.myNotifications.frequests.push(invite._id);
    user2.personal.frequests.push(invite._id);

    await user.findByIdAndUpdate(user2._id, {personal: user2.personal}, {runValidators: true});
    res.json({message: 'Το αίτημα φιλίας εστάλει!'})

  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Accept Friend Request
router.post('/accept-frequest', async(req, res) => {
  try{

    const user1 = req.user;
    const request = await frequest.findById(req.body.request);

    if(!request){
      return res.json({message: 'Η πρόσκληση δεν βρέθηκε!'});
    }

    const user2 = await user.findById(request.from);
    if(!user2){
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'});
    }

    //update users friendLists
    user1.personal.friendsList.push(user2._id);
    user2.personal.friendsList.push(user1._id);

    await user.findByIdAndUpdate(user2._id, {personal: user2.personal}, {runValidators: true});
    
    // remove frequest from user's 1 notifications, if still there
    user1.personal.myNotifications.frequests = user1.personal.myNotifications.frequests.filter((reqID) => { return !reqID.equals(request._id) })

    // remove frequest from user's 1 list, if still there
    user1.personal.frequests = user1.personal.frequests.filter((reqID) => { return !reqID.equals(request._id) })

    console.log('edw');
    await user.findByIdAndUpdate(user1._id, {personal: user1.personal}, {runValidators: true});


    // Delete frequest
    await frequest.remove(request);

    res.json({messae: 'Το αίτημα φιλίας έγινε αποδεκτό'});
  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Deny Friend Request
router.delete('/deny-frequest', async(req, res) => {
  try{

    const user1 = req.user;
    const request = await frequest.findById(req.body.request);

    if(!request){
      return res.json({message: 'Η πρόσκληση δεν βρέθηκε!'});
    }

    // remove frequest from user's 1 notifications, if still there
    user1.personal.myNotifications.frequests = user1.personal.myNotifications.frequests.filter((reqID) => { return !reqID.equals(request._id) })

    // remove frequest from user's 1 list, if still there
    user1.personal.frequests = user1.personal.frequests.filter((reqID) => { return !reqID.equals(request._id) })

    await user.findByIdAndUpdate(user1._id, {personal: user1.personal}, {runValidators: true});


    // Delete frequest
    mongoose.connection.db.frequests.remove(request);

    res.json({messae: 'Το αίτημα φιλίας απορρίφθηκε'});

  }catch(err){
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Remove a friend
router.delete('/remove-friend', async(req, res) => {
  try{

    const user1 = req.user;
    const user2 = await user.findById(req.body.exfriend);
    if(!user2)
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'});

    user1.personal.friendsList = user1.personal.friendsList.filter((fid) => {return !fid.equals(user2._id)});
    user2.personal.friendsList = user2.personal.friendsList.filter((fid) => {return !fid.equals(user1._id)});

    await user.findByIdAndUpdate(user1._id, {personal: user1.personal});
    await user.findByIdAndUpdate(user2._id, {personal: user2.personal});

    const username = user2.personal.firstName + ' ' + user2.personal.lastName;
    res.json({message: 'Ο χρήστης ' + username + ' αφαιρέθηκε απο τους φίλους σας!'});

  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Clean user's notifications
router.post('/clean-notifications', async(req, res) => {
  try{
    const targetUser = req.user;

    targetUser.personal.myNotifications.frequests = [];
    targetUser.personal.myNotifications.comments = [];
    targetUser.personal.myNotifications.reacts = [];

    await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal}, {runValidators: true});

    res.json({message: 'Οι ειδοποιήσεις αφαιρέθηκαν!'});
  }catch(err){
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get all Chats
router.get('/getChats', async(req, res) => {
  try{
      res.json(req.user.personal.myChats);
  }catch(err){
      res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Send a message
router.post('/sendMssg', async(req, res) => {
  try{

    const user1 = req.user;                                     // from_user
    const user2 = await user.findById(req.body.to_user);        // to_user
    if(!user2)
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'});

    // check if chat already exists
    var targetChat = undefined;
    for(let i in user1.personal.myChats){
      console.log(i)
      var tryChat = await chat.findById(user1.personal.myChats[i])
      if(tryChat.users.includes(user1._id) && tryChat.users.includes(user2._id)){
        targetChat = tryChat;
        break;
      }
    }

    // if it doesnt create a new one
    if(!targetChat){
      targetChat = new chat();
      
      targetChat.users.push(user1._id);
      targetChat.users.push(user2._id);
      await targetChat.save();

        // init new chat
      user1.personal.myChats.push(targetChat._id);
      user2.personal.myChats.push(targetChat._id);
      await user.findByIdAndUpdate(user1._id, {personal: user1.personal}, {runValidators: true});
      await user.findByIdAndUpdate(user2._id, {personal: user2.personal}, {runValidators: true});
    }

    // fill mssg
    const message = {creator: user1._id, content: req.body.content, status: 'not-seen'};

    targetChat.content.push(message);
  
    // send mssg
    await chat.findByIdAndUpdate(targetChat._id, {content: targetChat.content}, {runValidators: true});

    // send notification
    user2.personal.myNotifications.chats.push(targetChat.id);
    await user.findByIdAndUpdate(user2._id, {personal: user2.personal}, {runValidators: true});


    res.json({message: 'Το μήνυμα εστάλει!'});
  }catch(err){
    res.json({message: err});
  }
})


router.post('/seen-mssg', async(req, res) => {
  try{
    const targetChat = await chat.findById(req.body.chatid);
    if(!targetChat)
      return res.json({message: 'Η συζήτηση δεν βρέθηκε!'});

    const user1 = targetChat.users[0];
    const user2 = targetChat.users[1];
    var sender = null;
    if(user1 == req.user._id)
      sender = user2;
    else
      sender = user1;

    targetChat.content = targetChat.content.filter((mssg) => {mssg.status = (mssg.creator!=sender) ? 'seen': mssg.status ;return mssg});

    console.log(targetChat.content);
    await chat.findByIdAndUpdate(targetChat._id, {content: targetChat.content}, {runValidators: true});

    res.json({message: 'Τα μηνύματα διαβάστηκαν!'});

  }catch(err){
    res.json({message: err});
  }
})

module.exports = router;