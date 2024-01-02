const mongoose = require("mongoose");
const express = require("express")
const User = require("../Components/Backend/Modelss/Registration.model"); // Use different variable name
const router = express.Router();

router.post("/register", async (req, res) => {
    const newuser = new User({
        username: req.body.username, // Adjust the field names based on your model
        email: req.body.email,
        password: req.body.password,
    });

    try {
        const savedUser = await newuser.save(); // Use a different variable name
        res.send("User registration successful");
    } catch (error) {
        return res.status(400).json({ error });
    }
});

router.post('/login', async (req, res)=>{
    const {username, password} = req.body;
    try{
        const user = await User.findOne({username : username, password : password});
        
        if(user){
           const temp = {
            username : user.username,
            email : user.email,
            isAdmin : user.isAdmin,
            _id : user._id,
           }
           console.log(temp);
           res.redirect('/');
        }
        else{
            console.log("The user do not exists")
        }
    }
    catch(error){
        console.log("The user do not exists");
    }
    
})
module.exports = router;
