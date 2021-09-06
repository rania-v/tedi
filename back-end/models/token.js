const mongoose = require("mongoose");
require("mongoose-type-email");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ User Schema
const invalidTokenSchema = new mongoose.Schema({
    value: String,
    created:{
        type: Date,
        default: Date.now
    }
})

invalidTokenSchema.index({ createdAt: 1 }, { expireAfterSeconds:86400 });


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hash n Salt
const invalidToken = mongoose.model('invalidToken', invalidTokenSchema)
module.exports ={
    invalidToken: invalidToken,
}