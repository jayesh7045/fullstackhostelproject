require('dotenv').config();
const express = require("express");

const app = express();
const dbConfig = require('./db')
const roomRoute = require("./src/routess/roomsRoute")

app.use('/api/Rooms', roomRoute);
const port = process.env.port||5000;
app.listen(port, ()=>console.log(`server Hi running on port ${port}`));