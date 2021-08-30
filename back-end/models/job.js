const mongoose = require("mongoose");
require("mongoose-type-email");


const jobSchema = new mongoose.Schema({
    adInfo:{
        adTitle: {type: String, required: true},
        jobTitle: {type: String, required: true},
        companyName: {type: String, required: true},
        jobLocation: {type: String, required: true},
        adImg: {data: Buffer, contentType: String,}
    },
    qualifications:{
        keyQ: [{type: String}],
        exp: [{type: String}],
        companyName: {type: String, required: true},
        jobLocation: {type: String, required: true},
        adImg: {data: Buffer, contentType: String,}
    },
    jobDescription:{
        duties: [{type: String}],
        workEnv: [{type: String}],
        remoteWork: Boolean,
        jobDescription: String,
    },
    benefits:{
        employmentType:{
            type: String,
            enum: ['full-time', 'part-time', 'casual employment', 'internship', 'commision']
        },
        minSalary: Number,
        maxSalary: Number,
        benefits: String,
    },
    apply:{
        email: {type: mongoose.SchemaTypes.Email},
        site: {type: String},
    },
    optionalInfo:{
        type: String,
    }
})

const job = mongoose.model('Job', jobSchema);
module.exports = {
    job: job,
}