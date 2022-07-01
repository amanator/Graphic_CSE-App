const mongoose = require('mongoose')
// Change Accrodingly

const mongoURI = "dbURL"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected")
    })
}

module.exports = connectToMongo;
