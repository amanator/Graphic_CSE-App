const mongoose = require('mongoose');
const { Schema } = mongoose;

const RecruiterSchema = new Schema({
    urlToImage:{
        type:String,
        required:true,
    },

});


const Recruiter = mongoose.model('recruiter', RecruiterSchema);
Recruiter.createIndexes();
module.exports = Recruiter;