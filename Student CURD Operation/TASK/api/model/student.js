const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:String,
    lastname:String,
    roll_no:Number,
    age:Number,
    Status:String
})

module.exports = mongoose.model('Student', studentSchema)