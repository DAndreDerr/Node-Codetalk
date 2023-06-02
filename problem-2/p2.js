// What is happening in the following code snippet?  Assume the following:


// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code: 

// here we import readfile and writefile from the fs module
const {readFile, writeFile} = require('fs');

// here we log to the console we are starting the program
console.log('start');

// here we use the read file function
// this function follows the path and reads the data in the file
readFile('./content/first.txt','utf8', (err, result)=> {
//    error check
    if (err) {
       console.log(err);
       return 
   }
//    below we store the result of first.txt in the "first" variable
   const first = result;
//  here we log "result" to the console
   console.log(result);

//    here we use readfile again for the second.txt file
   readFile('./content/second.txt','utf8', (err, result)=> {
    // error check
       if (err) {
           console.log(err);
           return 
       }
    //    below we store the result of the second.txt in the "second" variable
       const second = result;
    //  below we log our result to the console
       console.log(result);

    //  Here we use writefile to write a new file called result-async.txt
       writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`,(err, result) => {
        //    error check
            if (err) {
               console.log(err);
               return 
           }
        // here we log when we are done
           console.log('done with the task');
       }
       );
   })
});


console.log('starting next task');

// IN SUMMARY

// the code above reads two files (first.txt & second.txt) asynchronously 
// then writes a template literal string including the first and second file
// we then stored that in a new file (result-asyn.txt)
