const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get all Chats
router.get('/', async(req, res) => {
    try{
        res.json(req.user.personal.myChats);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;