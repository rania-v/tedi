const { response } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {post, comment} = require('../models/post');
const {user} = require('../models/user');

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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get all Posts
router.get("/", async (req, res)=>{
    try{
        const posts = await post.find({});
        res.json(posts);
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get a Post
router.get("/:postId", async (req, res)=>{
    try{
        const post = await post.findById(req.params.postId);
        res.json(jobs);
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create a Post
router.post("/", async (req, res)=>{
    try{
        var targetUser = req.user;
        console.log(req.body)
        const newPost = new post(req.body);
        newPost.creator = targetUser._id;
        const savedPost = await newPost.save();
        


        targetUser.personal.myPosts.push(savedPost._id);
        await user.findByIdAndUpdate(targetUser._id, targetUser, {runValidators: true})

        res.json({post: savedPost, message: 'Η ανάρτηση δημιουργήθηκε !!'});
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Delete a Post
router.delete("/post:postId", async (req, res)=>{
    try{
        const targetUser = req.user;
        const targetPost = await post.findById(req.params.postId);

        console.log(targetUser.personal.myPosts);

        if(!targetPost){
            return res.status(400).json({message: 'Η ανάρτηση δεν βρέθηκε'});
        }

        // delete comments, if any
        for (let i in targetPost.comments) {
            await comment.deleteOne({ _id: targetPost.comments[i] });
        }

        // remove post
        await post.deleteOne({ _id: targetPost._id });

        targetUser.personal.myPosts = targetUser.personal.myPosts.filter((postID) => { return !postID.equals(targetPost._id) });
        console.log(targetUser.personal.myPosts);
        await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal}, {runValidators: true})

        res.json({message: 'Η ανάρτηση αφαιρέθηκε !!',});
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Add a Comment
router.post("/addComm:postId", async(req, res) => {
    try{

        const targetPost = await post.findById(req.params.postId);
        const targetUser = req.user;

        
        const newComm = new comment(req.body);
        newComm.creator = targetUser._id;
        newComm.post = targetPost._id;
        const savedComm = await newComm.save();

        targetPost.comments.push(savedComm._id);
        await post.findByIdAndUpdate(targetPost._id, targetPost, {runValidators: true});

        // notify the post's creator
        const creator = await user.findById(targetPost.creator);
        creator.personal.myNotifications.comments.push(newComm._id);
        await user.findByIdAndUpdate(creator._id, {personal: creator.personal}, {runValidators: true});


        res.json({message: 'Το σχόλιο δημοσιεύθηκε!'})
    }catch(err){
        res.status(400).json({message: err});
    }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Delete a Comment
router.delete("/comment:commentId", async(req, res) =>{
    try{
        const targetComm = await comment.findById(req.params.commentId);
    
        // remove comment from it's post's comm_list
        const targetPost = await post.findById(targetComm.post);
        targetPost.comments = targetPost.comments.filter((commentID) => { return !commentID.equals(targetComm._id) });
        await post.findByIdAndUpdate(targetPost._id, {comments: targetPost.comments}, {runValidators: true});

        // remove comment
        await comment.deleteOne({_id: targetComm._id});

        res.json({message: 'Το σχόλιο αφαιρέθηκε!'})

    }catch(err){
        res.status(400).json({message: err});
    }
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Edit a Post
router.post("/post-edit:postId", async(req, res)=>{
    try{



    }catch(err){
        res.status(400).json({message: err});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ React


        // ~~~~~~~~~~~~~~~~~ REACT: INTRESTED
router.post("/react1:postId", async(req, res) => {
    try{
        const targetUser = req.user;
        const targetPost = await post.findById(req.params.postId);

        if(!targetPost){
            return res.json({message: "Η δημοσίευση δεν βρέθηκε!"})
        }
        
        const reacted = targetPost.reacts.map(function(el) {return el.creator;}).indexOf(targetUser._id);

        const reaction = {reaction: 'intrested', creator: targetUser._id};
        const flag = 0;

        if(reacted != -1){
            if(targetPost.reacts[reacted].reaction != 'intrested'){
                targetPost.reacts[reacted].reaction = 'intrested'
                console.log(targetPost.reacts);
                await post.findByIdAndUpdate(targetPost._id, {reacts: targetPost.reacts}, {runValidators: true});
            }
            else
                flag = 1;
        }
        else{
            targetPost.reacts.push(reaction);
            await post.findByIdAndUpdate(targetPost._id, {reacts: targetPost.reacts}, {runValidators: true})
        }
        
        // notify post's creator
        if(flag == 0){
            const creator = await user.findById(targetPost.creator);
            creator.personal.myNotifications.reacts.push(reaction);
            await user.findByIdAndUpdate(creator._id, {personal: creator.personal}, {runValidators: true});
        }

        res.json({message: "Η αντίδραση δημοσιεύθηκε!"})

    }catch(err){
        res.json({message: err});
    }
})


        // ~~~~~~~~~~~~~~~~~ REACT: LIKE
router.post("/react2:postId", async(req, res) => {
    try{
        const targetUser = req.user;
        const targetPost = await post.findById(req.params.postId);

        if(!targetPost){
            return res.json({message: "Η δημοσίευση δεν βρέθηκε!"})
        }
        
        const reacted = targetPost.reacts.map(function(el) {return el.creator;}).indexOf(targetUser._id);

        const reaction = {reaction: 'like', creator: targetUser._id};
        const flag = 0;

        if(reacted != -1){
            if(targetPost.reacts[reacted].reaction != 'like'){
                targetPost.reacts[reacted].reaction = 'like'
                console.log(targetPost.reacts);
                await post.findByIdAndUpdate(targetPost._id, {reacts: targetPost.reacts}, {runValidators: true});
            }
            else
                flag = 1;
        }
        else{
            targetPost.reacts.push(reaction);
            await post.findByIdAndUpdate(targetPost._id, {reacts: targetPost.reacts}, {runValidators: true})
        }
        
        // notify post's creator
        if(flag == 0){
            const creator = await user.findById(targetPost.creator);
            creator.personal.myNotifications.reacts.push(reaction);
            await user.findByIdAndUpdate(creator._id, {personal: creator.personal}, {runValidators: true});
        }

        res.json({message: "Η αντίδραση δημοσιεύθηκε!"})

    }catch(err){
        res.json({message: err});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Remove a reaction
router.delete("/react:postId", async(req, res) => {
    try{
        const targetUser = req.user;
        const targetPost = await post.findById(req.params.postId);

        if(!targetPost){
            return res.json({message: "Η δημοσίευση δεν βρέθηκε!"})
        }

        targetPost.reacts = targetPost.reacts.filter((elem) => { return !elem.creator.equals(targetUser._id) });
        await post.findByIdAndUpdate(targetPost._id, {reacts: targetPost.reacts}, {runValidators: true});

        res.json({message: 'Η αντίδραση αφαιρέθηκε!'})
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;