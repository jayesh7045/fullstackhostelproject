const mongoose = require("mongoose");

var mongourl = 'mongodb+srv://jayu:hanishka123@cluster0.ebendkr.mongodb.net/mern-project';
mongoose.connect(mongourl, {useUnifiedTopology : true, useNewUrlParser:true})
var connection = mongoose.connection;
connection.on('err', ()=>{
    console.log("MongoDB connection failed")
})

connection.on("connected", ()=>{
    console.log("Mongo DB Connection Successful")
})
module.exports = mongoose