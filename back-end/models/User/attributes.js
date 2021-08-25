const mongoose = require("mongoose");
require("mongoose-type-email");


const attrsSchema = new mongoose.Schema({
    resume:{
        file: { type: Buffer, required: true },
        filename: { type: String, required: true },
        mimetype: { type: String, required: true }
    },
    profession:{
        type: String,
        minLength: 4,
    },
    workplace:{
        type: String,
    },
})

const attrs = mongoose.model('attrs', attrsSchema);
mongoose.model.exports = {
    attrs: attrs,
}