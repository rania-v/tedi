const mongoose = require("mongoose");

const weightsSchema = new mongoose.Schema({
    jobs_skills:[
        {
            skill:String,
            job:{type: mongoose.Types.ObjectId, ref:'job'},
            weight: Number
        }
    ],
    skills_users:[
        {
            skill:String,
            user:{type: mongoose.Types.ObjectId, ref:'user'},
            weight: Number
        }
    ]
})

const weights = mongoose.model('weights', weightsSchema);
module.exports = {
    weights: weights,
}
