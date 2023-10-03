const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    
        name: {
            type:String,
            required:true
        },
        maxCount : {
            type: Number,
            required:true
        },
        phoneNumber:{
            type:Number,
            required:true
        },
        rentPay:{
            type:Number,
            required:true
        },
        imageurls : [],
        currentBookings : [],
        type:{
            type:String,
            required : true 
        },
        description:{
            type:String,
            reuired:true 
        }
},{
    timestamps : true,
})
const roomModel = mongoose.model('Room', roomSchema)
module.exports = roomModel