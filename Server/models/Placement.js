const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlacementSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    urlToImage:{
        type:String,
        required:true,
    },

});


const Placement = mongoose.model('placement', PlacementSchema);
Placement.createIndexes();
module.exports = Placement;