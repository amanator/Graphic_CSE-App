const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
    },
    issue:{
        type:String,
    }
    

});


const Contact = mongoose.model('contact', ContactSchema);
Contact.createIndexes();
module.exports = Contact;