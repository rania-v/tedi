const mongoose = require("mongoose");
require("mongoose-type-email");


const userPersonalSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        unique: true,
        minLength: 1
    },
    lastName:{
        type: String,
        required: true,
        unique: true,
        minLength: 1
    },
    password:{
        type: String,
        minLength: 8,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    birthday:{
        type: Date,
    },
    country:{
        type: String,
    },
    friendsList:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    myJobsAds:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'job'
        }
    ],
    myChat:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Chat'
        }
    ]
})

const uPersonal = mongoose.model('uPersonal', userPersonalSchema);
mongoose.model.exports = {
    uPersonal: uPersonal,
}