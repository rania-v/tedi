const mongoose = require("mongoose");
require("mongoose-type-email");


const UserSchemaTest = new mongoose.Schema({
    name: String,
    email: String,
})

const UserSchema = new mongoose.Schema({
    // verificationCode: String,
    isAdmin:{type: Boolean, required: true},
    personal:{
        firstName:{
            type: String,
            required: true,
            minLength: 1
        },
        lastName:{
            type: String,
            required: true,
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
    },
    contact:{
        phoneNum:{
            type: String,
        },
        perEmail:{
            type: mongoose.SchemaTypes.Email,
            unique: true,
        },
        profEmail:{
            type: mongoose.SchemaTypes.Email,
            unique: true,
            required: true
        }
    },
    attrs:{
        resume:{
            file: { type: Buffer},
            filename: { type: String},
            mimetype: { type: String}
        },
        profession:{
            type: String,
            minLength: 4,
        },
        workplace:{
            type: String,
        },
    },    
})

// const user = mongoose.model('user', UserSchemaTest);
module.exports = mongoose.model('user', UserSchema);