const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
require("mongoose-type-email");


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ User Schema
const UserSchema = new mongoose.Schema({
    // verificationCode: String,
    isAdmin:{type: Boolean, default: false},
    personal:{
        firstName:{
            type: 'String',
            required: true,
            unique: true,
            minLength: 1
        },
        lastName:{
            type: String,
            required: true,
            minLength: 1
        },
        password:{
            type: String,
            required: true,
            minLength: 8,
        },
        image: {
            data: Buffer,
            contentType: String,
        },
        birthday: Date,
        country: String,
        friendsList:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
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
        phoneNum: String,
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
        workplace: String
    },    
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Frined Request Schema
const friendRequestSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    invitationCode: String
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hash n Salt
UserSchema.pre('save', async function(next){
    if(this.personal.password){
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.personal.password, salt);

        this.personal.password = hash;
        next();
    }
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hash psswrd for validation
UserSchema.methods.isValidPassword = async function(password) {
    const compare = await bcrypt.compare(password, this.personal.password);
    return compare;
}
  

const user = mongoose.model('user', UserSchema)
const frequest = mongoose.model('frequest', friendRequestSchema)
module.exports ={
    user: user,
    frequest: frequest,
}