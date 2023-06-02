// below the code is grabbing all the neceasarry modules and tools
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// here we grab the validation file
const { signupValidation, loginValidation } = require('./validation.js');
const app = express();
// 
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(cors());
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
});
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
});
// Handling Errors
app.use((err, req, res, next) => {
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
app.listen(3000,() => console.log('Server is running on port 3000'));

// IN SUMMARY

// the code sets up a node server using Express.js 
// it includes validation middleware for user registration and login routes
// this middleware utilizes 'express-validator' which is a module that validates the incoming request data
// The server also configures middleware for parsing, enables CORS, and handles errors.