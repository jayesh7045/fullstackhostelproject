const express = require("express")
const collection = require("./mongo")
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.use(cors());
app.get("/register", cors(), (req, res)=>{

})

app.post("/register", async(req, res)=>{
  const [username, email, password, confirm_password]  = req.body
  try{
    const check = await collection.findOne({email : email})
    if(check)
    {
      res.json("exists");
    }
    else{
      res.json("notexists")
    }
  }
  catch(err){
    res.json("notexists")
  }
})

app.post('/login', async(req, res)=>{
  const [username, password] = req.body
  const data = {
    email : email,
    password : password
  }
  try{
    const check = await collection.findOne({email : email})
    if(check){
      res.json("exists");
    }
    else{
      res.json("notexists");
      await collection.insertMany([data]);

    }
  }
  catch(e){
    req.json("notexists")
  }
})

app.listen(3000, ()=>{
  console.log("Port connected");
})