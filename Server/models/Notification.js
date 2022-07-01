const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotificationSchema = new Schema({
    date:{
        type:String,
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    }
    

});


const Notification = mongoose.model('notification', NotificationSchema);
Notification.createIndexes();
module.exports = Notification;