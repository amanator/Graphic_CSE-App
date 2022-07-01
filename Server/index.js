const connectToMongo = require("./db")
const express = require('express')

const Placement = require('./models/Placement')
// const multer  = require('multer')
var cors = require('cors')
const path = require('path')
let port = process.env.PORT || 9000

connectToMongo()
const app = express();
app.use(cors())
app.use(express.json())


// Routes
app.use('/api/home', require('./routes/Home'))
app.use('/api/faculty', require('./routes/Faculty_main'))
app.use('/api/placement', require('./routes/Placement_main'))
app.use('/api/contact', require('./routes/Contact_main'))


app.listen(port, ()=>{
    console.log("Listening at: ",port)
})