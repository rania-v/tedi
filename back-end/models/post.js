const mongoose = require("mongoose");
require("mongoose-type-email");


const postSchema = new mongoose.Schema({
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Date:{ type: ISODate, default: ISODate.now },
    content:{ type: String, minLength: 1, maxLength: 250 },
    reacts:[
        {
            type: String,
            enum: ['like', 'intrested']
        }
    ],
    comments:[
        {
            creator:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            Date:{type: ISODate, default: ISODate.now},
            content:{type: String, minLength: 1, maxLength: 60}
        }
    ]
})


const post = mongoose.model('post', postSchema);
module.exports = {
    post: post,
}