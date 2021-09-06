const mongoose = require("mongoose");
require("mongoose-type-email");


const chatSchema = new mongoose.Schema({
    users:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ],
    Date:{ type: ISODate, default: ISODate.now },
    content:[
        {
            creator:{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            Date:{type: Date, default: Date.now},
            content:{type: String, minLength: 1, maxLength: 100},
            status:{
                type: String,
                enum: ['pending', 'delivered', 'seen', 'not send']
            }
        }
    ]
})


const chat = mongoose.model('chat', chatSchema);
module.exports = {
    chat: chat,
}
