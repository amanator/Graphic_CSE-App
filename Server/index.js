const connectToMongo = require("./db")
const express = require('express')
const Faculty = require('./models/Faculty')
const Placement = require('./models/Placement')
// const multer  = require('multer')
var cors = require('cors')
const path = require('path')
let port = process.env.PORT || 9000

connectToMongo()
const app = express();
app.use(cors())
app.use(express.json())

app.get('/getfaculty', async(req, resp)=>{
    try {
        let data = await Faculty.find();
        // console.log(data)
        resp.send(data);
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
})
app.get('/getplacement', async(req, resp)=>{
    try {
        let data = await Placement.find();
        
        resp.send(data);
    } catch (error) {
        resp.status(500).send("Internal Server Error Occured");
    }
})

app.listen(port, ()=>{
    console.log("Listening at: ",port)
})