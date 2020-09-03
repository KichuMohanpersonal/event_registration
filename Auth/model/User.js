const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 20,

    },
    password: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        max: 1021,
    },
    phone:{
        type:String,
        required:true,
        max:15,
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

module.exports = mongoose.model('User',UserSchema);