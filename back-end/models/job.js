const mongoose = require("mongoose");
require("mongoose-type-email");


const jobSchema = new mongoose.Schema({
    date:Date.now,
    title: {type: String, required: true},
    image: {data: Buffer, contentType: String,},
    basic_info:{
        job_title:{type: String, required: true},
        company_name: {type: String, required: true},
        location: {type: String, required: true},
    },
    qualifications:{
        key_qualifications: {type: String},
        req_experiense: {type: String},
    },
    job_Description:{
        pos_duties: {type: String},
        work_env: {type: String},
        remoteWork: Boolean,
        job_desc: String,
        employmentType:{
            type: String,
            enum: ['full-time', 'part-time', 'casual employment', 'internship', 'commision']
        },
    },
    benefits:{
        salary:{
            min: String,
            max: String,
        },
        pos_benefits: String,
    },
    apply:{
        link: {String},
        email: {type: mongoose.SchemaTypes.Email},
        site_link: {type: String},
    },
    more_job_info: {type: String,}
})

const job = mongoose.model('Job', jobSchema);
module.exports = {
    job: job,
}