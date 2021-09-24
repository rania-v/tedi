const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
require("mongoose-type-email");


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ User Schema
const UserSchema = new mongoose.Schema({
    // verificationCode: String,
    isAdmin:{type: Boolean, default: false},
    personal:{
        firstName:{
            type: String,
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
        birthday: {value:{Date}, private: Boolean},
        country: {value:{String}, private: Boolean},
        friendsList:{
            list:[ { type: mongoose.Schema.Types.ObjectId, ref: 'user'} ],
            private: Boolean
        },
        frequests:{
            list:[ { type: mongoose.Schema.Types.ObjectId, ref: 'frequests' } ],
            private: Boolean
        },
        myJobsAds:{
            list:[ { type: mongoose.Schema.Types.ObjectId, ref: 'job' } ],
            private: Boolean
        },
        myChats:[ { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' } ],
        myPosts:{
            list:[ { type: mongoose.Schema.Types.ObjectId, ref: "post" } ],
            private: Boolean
        },
        myNotifications:{
            frequests:[ { type: mongoose.Schema.Types.ObjectId, ref: 'frequest' } ],
            reacts: [ {} ],
            comments: [ { type: mongoose.Schema.Types.ObjectId, ref: 'comment' } ],
            chats: [ {type: mongoose.Schema.Types.ObjectId, ref: 'chat'} ],
        },
    },
    contact:{
        phoneNum:{
            value:{
                type: String,
            },
            private: Boolean
        },
        perEmail:{
            value: {
                type: mongoose.SchemaTypes.Email,
                unique: true,
            },
            private: Boolean
        },
        profEmail:{
            value:{
                type: mongoose.SchemaTypes.Email,
                unique: true,
                required: true,
            },
            private: Boolean
        }
    },
    attrs:{
        resume:{
            value:{

                file: { type: Buffer},
                filename: { type: String},
                mimetype: { type: String},
            },
            private: Boolean
        },
        profession:{
            value:{
                type: String,
                minLength: 4,
            },
            private: Boolean
        },
        workplace: {
            name: String,
            private: Boolean
        },
        skill_list:{
            list: [{ type: String}],
            private: Boolean
        }
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
  

const user = mongoose.model('user', UserSchema);
const frequest = mongoose.model('frequest', friendRequestSchema);
module.exports ={
    user: user,
    frequest: frequest,
}