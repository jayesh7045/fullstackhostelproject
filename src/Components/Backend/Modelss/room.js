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
        type:{
            type:String,
            required : true 
        },
        description:{
            type:String,
            reuired:true 
        },
        Wifi : {
            type: String
        },
        address : {
            type: String
        },
        duration:{
            type: String
        },
        deposit_amount:{
            type: String
        }
},{
    timestamps : true,
})
const roomModel = mongoose.model('Room', roomSchema)
module.exports = roomModel;