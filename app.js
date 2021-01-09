const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config();
const postRoute = require('./routes/posts')
const cors        = require('cors');


app.use(bodyparser.json())
app.use(cors());

app.get("/", (req, res)=>{

    res.send("home")
})

app.use("/posts", postRoute)


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true}, () =>
console.log("connected to db"))


app.listen(3000)