const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;   

const { Employee } = require('../models/employee');




// Get Single Employee 

router.get('/api/employee/:id', (req, res) => {
    Employee.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
});




//save Employee
router.post('/api/employee/add',(req, res) =>  {
 const emp = new Employee({
     name: req.body.name,
     email: req.body.email,
     age: req.body.age,
     id: req.body.id
 });
 emp.save((err, data)=> {
    if(!err) {
        // res.send(data);
     res.status(200).json({ code:200, message:  'Employee Added Successfuly',addEmployee: data})
    } else {
        console.log(err);
    }
 });
});

// Update Employee

router.put('/api/employee/update/:id', (req, res) => {


    const emp = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        id: req.body.id
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee Updated Successfully', updateEmployee: data})
        } else {
            console.log(err);
        }
    });
});



// Delete Employee
router.delete('/api/employee/:id', (req, res) => {

    Employee.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'Employee deleted', deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});


module.exports = router;    