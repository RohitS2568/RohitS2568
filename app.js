const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

//Dotenv is a zero-dependency module that loads enviroment variable from a .env file into process.env

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Middleware
// app.use('/employees', () => {
//     console.log('Middleware Running');
// });

// Routes 
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/',(req,res) => {
// res.send("Hello World");


// });


// app.get('/employees',(req,res) => {
//    res.send('Employees');
// });


const connectDB = require('./config/db');
// Load config
dotenv.config({path: './config/config.env'})

connectDB();

//Routes
app.use('/', require('./routes/index'));


app.listen(4000);