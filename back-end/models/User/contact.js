const mongoose = require("mongoose");
require("mongoose-type-email");


const contactSchema = new mongoose.Schema({
    phoneNum:{
        type: String,
    },
    perEmail:{
        type: mongoose.SchemaTypes.Email,
        unique: true,
    },
    profEmail:{
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true,
    }

})

const contact = mongoose.model('contact', contactSchema);
mongoose.model.exports = {
    contact: contact,
}