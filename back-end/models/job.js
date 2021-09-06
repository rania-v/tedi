const mongoose = require("mongoose");
require("mongoose-type-email");


const jobSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    Date:{type: Date, default: Date.now},
    title: {type: String, required: true, minLenght: 3},
    image: {data: Buffer, contentType: String,},
    basic_info:{
        job_title:{type: String, required: true},
        company_name: {type: String, required: true},
        location: {type: String, required: true},
    },
    qualifications:{
        key_qualifications: {type: String, required: true},
        req_experiense: {type: String, required: true},
    },
    job_Description:{
        pos_duties: {type: String},
        work_env: {type: String},
        remoteWork: {type: Boolean, default: 0},
        job_desc: {type: String, required: true},
        employmentType:{
            type: String,
            required: true,
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



//
// {
//     "title":"MY FIRST JOB AD",
//     "basic_info":{
//         "job_title":"Software Eng",
//         "company_name":"Vour House Co.",
//         "location": "In Da House Yall"
//     },
//     "qualifications":{
//         "key_qualifications":"Positive Enrgy",
//         "req_experiense":"None"
//     },
//     "job_Description":{
//         "job_desc":"Whatever",
//         "employmentType":"part-time"
//     }
// }