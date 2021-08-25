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
        remoteWork: {type: Boolean},
        jobDescription: {type: String},
    },
    benefits:{
        employmentType:{
            type: String,
            enum: ['full-time', 'part-time', 'casual employment', 'internship', 'commision']
        },
        minSalary: {type: Number},
        maxSalary: {type: Number},
        benefits: {type: String},
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
mongoose.model.exports = {
    job: job,
}