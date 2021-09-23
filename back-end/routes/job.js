const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const {job} = require('../models/job');
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


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get all Job Ads
router.get("/", async (req, res)=>{
    try{
        const jobs = await job.find({});
        res.json(jobs);
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get a Job Ad
router.get("/:jobId", async (req, res)=>{
    try{
        const jobs = await job.findById(req.params.jobId);
        res.json(jobs);
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Create a Job Ad
router.post("/", async (req, res)=>{
    try{
        var targetUser = req.user;
        
        const newJob = new job(req.body);
        newJob.creator = targetUser._id;
        const savedJob = await newJob.save();
        
        targetUser.personal.myJobsAds.push(savedJob._id);
        await user.findByIdAndUpdate(targetUser._id, targetUser, {runValidators: true})

        res.json({job: savedJob, message: 'Η Αγγελία δημιουργήθηκε !!'});
    }catch(error){
        res.status(400).json({message: error});
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Delete a Job Ad
router.delete("/:jobId", async (req, res)=>{
    try{
        const targetUser = req.user;
        const targetJob = await job.findById(req.params.jobId);
        
        console.log(targetUser.personal.myJobsAds);

        if(!targetJob){
            return res.status(400).json({message: 'Η αγγελία δεν βρέθηκε'});
        }
        
        await job.deleteOne({ _id: targetJob._id });

        targetUser.personal.myJobsAds = targetUser.personal.myJobsAds.filter((jobID) => { return !jobID.equals(targetJob._id) });
        console.log(targetUser.personal.myJobsAds);
        await user.findByIdAndUpdate(targetUser._id, {personal: targetUser.personal}, {runValidators: true})

        res.json({message: 'Η Αγγελία ' + targetJob.title + ' αφαιρέθηκε !!',});
    }catch(error){
        res.status(400).json({message: error});
    }
})




module.exports = router;