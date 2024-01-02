require('dotenv').config()
const express = require("express");
const app = express();
const dbConfig = require('./db')
const roomRoute = require("./src/routess/roomsRoute")
const userRoute = require("./src/routess/UsersRoute")
app.use(express.json())
app.use('/api/Rooms', roomRoute);
app.use('/api/Users', userRoute);
const port = process.env.PORT || '5000';
app.listen(port, ()=>console.log(`server Hi running on port ${port}`));
