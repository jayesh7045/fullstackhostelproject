const mongoose = require("mongoose")

const roomSchema = mongoose.Schema({
    
        name: {
            type:string,
            required:true
        },
        maxCount : {
            type: Number,
            reuired:true
        },
        phoneNumber:{
            type:number,
            required:true
        },
        rentPay:{
            type:number,
            reuired:true
        },
        imageurls : [],
        currentBookings : [],
        type:{
            type:string,
            required : true 
        },
        description:{
            type:string,
            reuired:true 
        }
},{
    timestamps : true,
})
const roomModel = mongoose.model('rooms', roomSchema)
module.exports = roomModel