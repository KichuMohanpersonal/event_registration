const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    id:{
        type:String,

    },
    dance:{
        type:String,
        default:"No",
    },
    
    chess:{
        type:String,
        default:"No",
    },
    music:{
        type:String,
        default:"No",
    },
    carroms:{
        type:String,
        default:"No",
    },
    hipop:{
        type:String,
        default:"No",
    },
    
})

module.exports = mongoose.model('Events',EventSchema);