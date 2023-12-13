const express = require("express")
const router = express.Router();

const Room = require("../Components/Modelss/room")
router.get('/getallrooms', async(req, res)=>{

    try{
        const room = await Room.find({})
        res.send(room)
    }
    catch(error){
        return res.status(400).json({message : err});
    }
    

})

router.post('/getroombyid', async(req, res)=>{
    const roomid = req.body.roomid
    try{
        const room = await Room.findOne({_id : roomid})
        res.send(room)
    }
    catch(error){
        return res.status(400).json({message : err});
    }
    

})

module.exports = router;


