const mongoose = require("mongoose");
require("mongoose-type-email");


const postSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Date:{ type: Date, default: Date.now },
    content:{ type: String, minLength: 1, maxLength: 250, required: true},
    reacts:[
        {
            reaction:{
                type: String,
                enum: ['like', 'intrested']
            },
            creator: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
        }
    ],
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment',
        }
    ]
})

const commentSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
    },
    Date:{type: Date, default: Date.now},
    content:{type: String, minLength: 1, maxLength: 60, required: true}

})


const post = mongoose.model('post', postSchema);
const comment = mongoose.model('comment', commentSchema);
module.exports = {
    post: post,
    comment: comment,
}