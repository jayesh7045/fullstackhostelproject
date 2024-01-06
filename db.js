const mongoose = require("mongoose");

var mongourl = process.env.MONGODB_URL;
mongoose.connect(mongourl, {useUnifiedTopology : true, useNewUrlParser:true})
var connection = mongoose.connection;
connection.on('err', ()=>{
    console.log("MongoDB connection failed")
})

connection.on("connected", ()=>{
    console.log("Mongo DB Connection Successful")
})

module.exports = mongoose
