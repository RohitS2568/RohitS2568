const mongoose = require('mongoose');




//Employee Schema

const Employee = mongoose.model('Employee',{
    name: {
        type: String,
    },   
        
    email: {
        type: String,
        
     },
     age: {
         type: String,
         
     },
     id:{
         type: String
     }

});

module.exports ={ Employee }