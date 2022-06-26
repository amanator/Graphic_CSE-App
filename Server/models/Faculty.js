const mongoose = require('mongoose');
const { Schema } = mongoose;

const FacultySchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    position:{
        type:String,
        required:true
    },
    urlToImage:{
        type:String,
        required:true
    }
    

});


const Faculty = mongoose.model('faculty', FacultySchema);
Faculty.createIndexes();
module.exports = Faculty;