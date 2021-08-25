const mongoose = require("mongoose");
require("mongoose-type-email");


const UserSchemaTest = new mongoose.Schema({
    name: String,
    email: String,
})

// const UserSchema = new mongoose.Schema({
//     verificationCode: String,
//     personal:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'uPersonal'
//     },
//     contact:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'contact'
//     },
//     attrs:{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'attrs'
//     },    
// })

const user = mongoose.model('user', UserSchemaTest);
mongoose.model.exports = {
    user: user,
}