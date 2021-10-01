const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const utils = require('../auth/utils');

const {invalidToken} = require('../models/token');
const { user, frequest} = require("../models/user");
const { chat } = require("../models/chat");
const {serUser, selector} = require('../serializer');
const {job} = require('../models/job')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Log out
router.post('/logout', async(req, res) => {
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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Refresh User
router.post('/refreshUser', async(req,res)=>{
  try{
    const ref = await user.findById(req.user._id)

    res.json({
      message: 'User refreshed!',
      user: ref
    })

  }catch(err){
    res.json({message: err})
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Search in Users
router.post('/searchUsers', async(req, res) =>{
  try{
    let val = req.body.val;
    // console.log('val: ', val);
    // let searched = await user.find({$text: {$search: val}}, {score:{$meta: "textScore"}})
    //    .limit(10).sort({score:{$meta: "textScore"}}).exec()
    // console.log('searched: ', searched);
    // let final = [];
    // for(let i of searched){
    //   console.log(i)
    //   final.push({name: i.personal.firstName + ' ' + i.personal.lastName, _id:i._id});
    // }
    // console.log('final: ', final);

    let searched = await user.find({});
    // console.log('searched: ', searched);

    let final = [];
    for(i of searched){
      if(i.personal.firstName.includes(val) || i.personal.lastName.includes(val)){
          final.push({name: i.personal.firstName + ' ' + i.personal.lastName, _id:i._id});
      }
    }

    // console.log('final: ', final)

    res.json({
      list: final
    })
  }catch(err){
    // console.log('skata')
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get All Users as Admin
router.post('/getAllUsers', async (req,res)=>{
  try{
    const admin = await user.findById(req.user._id);
    if(!admin.isAdmin){
      return res.json({message:'Only admins can perfom such actions!'})
    }

    // let allUsers = await user.find({isAdmin:false}).exec();  // CORRECT CODE !!!
    let allUsers = await user.find(); // WRONG CODE !!!! TEST DATA HAVE oNLY ADMINS


    let final = [];
    for(u of allUsers){
      await serUser(u)
      .then(res=>{final.push(res)})
      .catch(err=>{return res.json({message: err})})
    }

    return res.json({allUsers: final})
  }
  catch(err){
    res.json({message:err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Extract Users Data as Admin
router.post('/extractUsersData', async (req,res)=>{
  try{
    const admin = await user.findById(req.user._id);
    if(!admin.isAdmin){
      return res.json({message:'Only admins can perfom such actions!'})
    }

    // console.log('i got: ', req.body)

    let allData = [];

    for(let u of req.body.list){
      let targetUser = await user.findById(u);
      let userData = await selector(targetUser, req.body.extract_data);
      allData.push({user:userData});
    }


    // for(let type of req.body.types){
    //   console.log('type: ', type)
    //   if(type.type == "XML" && type.status){
    //     console.log('Selected type: ', type.type)
    //   }
    //   if(type.type == "JSON" && type.status){
    //     console.log('Selected type: ', type.type)
    //   }
    // }

    // console.log('allData: ', allData)
    res.json({allData: allData});
  }
  catch(err){
    res.json({message:err});
  }
})



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

    if(req.body.new_email.length>0){
      targetUser.contact.profEmail.value = req.body.new_email;
      await user.findByIdAndUpdate(targetUser._id, {contact: targetUser.contact}, {runValidators: true})
    }

    res.json({
      message: 'Το προφίλ χρήστη ενημερώθηκε',
      user: targetUser,
    })
  }catch(err){
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update User Personal Info
router.post('/update-user-personal', async(req, res) =>{
  try{
    // console.log('AAAAAAAAAAAAAAA')
    const targetUser = await user.findById(req.user._id);

    // console.log(targetUser.personal);
    // console.log(req.body);
    if(req.body.firstName){
      targetUser.personal.firstName = req.body.firstName;
    }

    if(req.body.lastName){
      targetUser.personal.lastName = req.body.lastName;
    }
    
    if(req.body.image){
      targetUser.personal.image = req.body.image;
    }
    
    if(req.body.birth_day){
      const date = req.body.birth_day + ' ' + req.body.birth_month + ' ' + req.body.birth_year;
      targetUser.personal.birthday = date;
    }

    if(req.body.country.value){
      targetUser.personal.country.value = req.body.country.value;
    }

    if(req.body.country.private!=null){
      targetUser.personal.private = req.body.country.value;
    }

    // console.log(targetUser.personal.country);

    await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal}, {runValidators: true})
    res.json({
      message: 'Οι προσωπικές πληροφορίες του χρήστη ενημερώθηκαν',
      user: targetUser,
    })

  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update User Contact Info
router.post('/update-user-contact', async(req, res) =>{
  try{
    const targetUser = await user.findById(req.user._id);
    
    // console.log(targetUser.contact);

    if(req.body.profEmail.value){
      targetUser.contact.profEmail.value = req.body.profEmail.value;
    }

    if(req.body.profEmail.private!=null){
      targetUser.contact.profEmail.private = req.body.profEmail.private;
    }

    if(req.body.perEmail.value){
      targetUser.contact.perEmail.value = req.body.perEmail.value;
    }

    if(req.body.perEmail.private!=null){
      targetUser.contact.perEmail.private = req.body.perEmail.private;
    }

    if(req.body.phoneNum.value){
      targetUser.contact.phoneNum.value = req.body.phoneNum.value;
    }

    if(req.body.phoneNum.private!=null){
      targetUser.contact.phoneNum.private = req.body.phoneNum.private;
    }
    // console.log(targetUser.personal);

    await user.findByIdAndUpdate(targetUser._id, {contact: targetUser.contact}, {runValidators: true})
    res.json({
      message: 'Οι πληροφορίες επικοινωνίας του χρήστη ενημερώθηκαν',
      user: targetUser,
    })

  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Update User Attrs Info
router.post('/update-user-attrs', async(req, res) =>{
  try{
    const targetUser = await user.findById(req.user._id);

    // console.log(targetUser.contact);

    if(req.body.resume.value){
      targetUser.attrs.resume.value = req.body.resume.value;
    }

    if(req.body.resume.private!=null){
      targetUser.attrs.resume.private = req.body.resume.private;
    }

    if(req.body.profession.value){
      targetUser.attrs.profession.value = req.body.profession.value;
    }

    if(req.body.profession.private!=null){
      targetUser.attrs.profession.private = req.body.profession.private;
    }

    if(req.body.workplace.value){
      targetUser.attrs.workplace.value = req.body.value;
    }

    if(req.body.workplace.priate!=null){
      targetUser.attrs.workplace.private = req.body.private;
    }

    if(req.body.skill_list.list){
      targetUser.attrs.skill_list.list = req.body.skill_list.list;
    }

    if(req.body.skill_list.private!=null){
      targetUser.attrs.skill_list.private = req.body.skill_list.private;
    }

    await user.findByIdAndUpdate(targetUser._id, {attrs: targetUser.attrs}, {runValidators: true})
    res.json({
      message: 'Οι πληροφορίες επικοινωνίας του χρήστη ενημερώθηκαν',
      user: targetUser,
    })

  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get Friend Request Sender
router.post('/getfrequestsender', async(req, res) => {
  try{
    var targetreq = await frequest.findById(req.body.gowild);
    var targetuser = await user.findById(targetreq.from);

    console.log('req: ', targetreq);
    console.log('user: ', targetuser);

    var sered = await serUser(targetuser);
    console.log('sered: ', sered)
    res.json({message: 'found the creepy bastard', fromUser: (targetuser)})
  }
  catch(err) {
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
    const friends = user2.personal.friendsList.list.includes(user2._id);
    if(friends)
      return res.json({message: 'Είστε ήδη φίλος με αυτόν τον χρήστη!'});

    const invite = new frequest();
    invite.from = user1._id;
    invite.to = user2._id;
    await invite.save();
console.log('edw')
    user2.personal.myNotifications.frequests.push(invite._id);
    user2.personal.frequests.push(invite._id);
    console.log('edw')

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
    user1.personal.friendsList.list.push(user2._id);
    user2.personal.friendsList.list.push(user1._id);

    await user.findByIdAndUpdate(user2._id, {personal: user2.personal}, {runValidators: true});
    
    // remove frequest from user's 1 notifications, if still there
    user1.personal.myNotifications.frequests = user1.personal.myNotifications.frequests.filter((reqID) => { return !reqID.equals(request._id) })

    // remove frequest from user's 1 list, if still there
    user1.personal.frequests = user1.personal.frequests.filter((reqID) => { return !reqID.equals(request._id) })

    // console.log('edw');
    await user.findByIdAndUpdate(user1._id, {personal: user1.personal}, {runValidators: true});


    // Delete frequest
    await frequest.remove(request);

    res.json({
      message: 'Το αίτημα φιλίας έγινε αποδεκτό',
      user: user1,
    });
  }catch(err){
    res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Deny Friend Request
router.post('/deny-frequest', async(req, res) => {
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

    res.json({
      message: 'Το αίτημα φιλίας απορρίφθηκε',
      user: user1
    });

  }catch(err){
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Remove a friend
router.post('/remove-friend', async(req, res) => {
  try{
    // console.log('rec: ', req.body)
    const user1 = req.user;
    const user2 = await user.findById(req.body.exfriend);
    if(!user2)
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'});

    user1.personal.friendsList.list = user1.personal.friendsList.list.filter((fid) => {return !fid.equals(user2._id)});
    user2.personal.friendsList.list = user2.personal.friendsList.list.filter((fid) => {return !fid.equals(user1._id)});

    await user.findByIdAndUpdate(user1._id, {personal: user1.personal});
    await user.findByIdAndUpdate(user2._id, {personal: user2.personal});

    const username = user2.personal.firstName + ' ' + user2.personal.lastName;
    res.json({
      message: 'Ο χρήστης ' + username + ' αφαιρέθηκε απο τους φίλους σας!',
      user: user1
    });

  }catch(err){
    res.json({
      message: err,
    });
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

    res.json({
      message: 'Οι ειδοποιήσεις αφαιρέθηκαν!',
      user: targetUser,
    });
  }catch(err){
    res.json({message: err});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get all Chats ID
router.get('/getChats', async(req, res) => {
  try{
      res.json(req.user.personal.myChats);
  }catch(err){
      res.json({message: err});
  }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get a Chat Info
router.post('/getChat', async(req, res) => {
  try{
    // console.log(req.body)
      const targetChat = await chat.findById(req.body.chatId);
      let user2 = '';
      if(req.body.prev){
        // var last = targetChat.content.length - 1;
        targetChat.content = targetChat.content ? targetChat.content[0] : [];
      }

      // let user2=null;
      let maybe = JSON.stringify(req.user._id)
      let maybe2 = JSON.stringify(targetChat.users[0])
      
      if(maybe == maybe2)
        user2 = targetChat.users[1]
      else
        user2 = targetChat.users[0]
// console.log('user2: ', user2)
      // user2 = ((req.user._id == targetChat.users[0]) ? targetChat.users[0] : targetChat.users[1]);

      // console.log('user: ', req.user._id)
      // console.log('user2: ', user2)
      // console.log('chat: ', targetChat);
      // console.log('flag: ', req.user.id==targetChat.users[0])

      res.json({
          chat: targetChat,
          user2: user2
      });
  }catch(error){
      res.status(400).json({message: error});
  }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create Chat
router.post('/createChat', async(req, res)=>{
  try{
    // console.log('AAAAAAAAAAAAA')
    var user1 = req.user;
    const user2ID = req.body.to_user
    var user2 = await user.findById(user2ID)
    if(!user2)
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'});

    var targetChat = new chat();

    targetChat.users.push(user1._id)
    targetChat.users.push(user2._id)
    await targetChat.save();

    user1.personal.myChats.push(targetChat._id);
    user2.personal.myChats.push(targetChat._id);
    await user.findByIdAndUpdate(user1._id, {personal: user1.personal}, {runValidators: true});
    await user.findByIdAndUpdate(user2._id, {personal: user2.personal}, {runValidators: true});

    return res.json({
      message: 'Το chat δημιουργήθηκε !',
      chat: targetChat,
      user: user1
    })

  }catch(err){
    return res.json({message: err})
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
      // console.log(i)
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


    res.json({
      message: 'Το μήνυμα εστάλει!',
      user: user1,
    });
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

    // console.log(targetChat.content);
    await chat.findByIdAndUpdate(targetChat._id, {content: targetChat.content}, {runValidators: true});

    res.json({
      message: 'Τα μηνύματα διαβάστηκαν!',
      // user: 
    });

  }catch(err){
    res.json({message: err});
  }
})


router.post('/jobApply', async(req, res)=>{
  try{
    let targetUser = await user.findById(req.user._id)
    let targetJob = await job.findById(req.body.jobId);
    targetJob.applicants.push(targetUser._id)
    
    targetUser.personal.applied.push(targetJob._id)
    
    await job.findByIdAndUpdate(targetJob._id, {applicants: targetJob.applicants})
    await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal})

    res.json({message: 'Applied To JOb !!', user: targetUser})

  }catch(err){
    res.json({message: err})
  }
})

router.post('/addView', async(req, res)=>{
  try{
    let targetUser = await user.findById(req.user._id)
    let targetJob = await job.findById(req.body.jobId);

    targetJob.views = targetJob.views+1
    await job.findByIdAndUpdate(targetJob._id, {views: targetJob.views})

    let flag = 0
    for(let v of targetUser.personal.interested){
      if(JSON.stringify(v.job)==JSON.stringify(targetJob._id)){
        v.times = v.times+1
        flag=1;
        break;
      }
    }
    if(flag==0)
      targetUser.personal.interested.push({job:targetJob._id, times:1})
    
    await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal})

    res.json({message: 'View Added !!', user: targetUser})

  }catch(err){
    res.json({message: err})
  }
})

router.post('/fillJobFeed', async(req,res)=>{
  try{
    const targetUser = await user.findById(req.user._id)
    if(!targetUser)
      return res.json({message: 'Ο χρήστης δεν βρέθηκε!'})
    
    let fList = targetUser.personal.friendsList.list;
    
    let jobsToSee = [];
    for(let f of fList){
      let fr = await user.findById(f);
      jobsToSee = jobsToSee.concat(fr.personal.myJobsAds.list);
    }
    
    if(!jobsToSee.length)
    return res.json({message: 'Δεν υπάρχουν διαθέσιμες αγγελίες!'})

    res.json({jobsToSee: jobsToSee})

  }catch(err){
    res.json({
      message: err
    })
  }
})

module.exports = router;