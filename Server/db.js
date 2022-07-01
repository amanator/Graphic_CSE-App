const mongoose = require('mongoose')
// Change Accrodingly
// const mongoURI = "mongodb://localhost:27017/cse_app?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const mongoURI = "mongodb+srv://currentaffairs:currentindoworldaffairs@cluster0.bscbz.mongodb.net/CSE_APP?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected")
    })
}

module.exports = connectToMongo;