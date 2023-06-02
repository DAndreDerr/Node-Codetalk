// What is happening in the code below? 
//      Answer: The code below is setting up connection to a MySQL database using the Node.js MySQL module

// Why is this important?
//      Answer: this code is important becaus it allows us to interact with MySQL databases from a node application

//  What would you use mySQL for?  
//      Answer: I would use mysql to store and manage data. I would probably use it in combination with an application
//              The application is refrencing the data from mySQL

// Can you give an example?  
//      Answer: An example could be if I wanted to build a e-commerce I could store and manage my product, customer, and order data  in mysql

// Assume that you have already installed ran npm install mysql


var mysql=require('mysql');
var connection=mysql.createConnection({
  host:'localhost',
  user:'your username',
  password:'your password',
  database:'your database name'
});
connection.connect(function(error){
  if(!!error){
    console.log(error);
  }else{
    console.log('Connected!:)');
  }
}); 
module.exports = connection;