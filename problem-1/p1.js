// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

// Code:

// this line imports the readFileSync and writeFileSync functions from the fs module
// the fs module is a built in node.js module 
const {readFileSync, writeFileSync} = require('fs');

// the readFileSync function is used to synchronusly read the contents of files

// the writeFileSync is used to write data to a file synchronusly
// it takes two required parameters (file path & data to write)




// import the fs module
const fs = require('fs');

// here we created two new variables
// inside each variable we utilize the readFileSync() function to read the content of the text files

const first = readFileSync('problem-1/first.txt','utf8')
const second = readFileSync('problem-1/second.txt','utf8')

// here we print the text file data to the console
console.log(first, second);

// here we utilize the writeFileSync function to write a new file (result-sync.txt)
// inisde that file we store everything after the comma
writeFileSync('problem-1/result-sync.txt', `Here is the result : ${first}, ${second}`);

// here we use the writeFileSync function again, but this time we included a flag parameter in our result
// this flag parameter tells the function to append the content instead of overwriting the file
writeFileSync('problem-1/result-sync.txt', `Here is the result : ${first}, ${second}`,{flag: 'a'});
// The flag option allows you to specify the file operation mode ('a')
// In our usage 'a' indicates the append mode

// IN SUMMARY
// The code above synchronously reads the content of two local files (first.txt & second.txt)
// prints the content of those files to the console log
// Then writes the combined result of those files to a new file (result-sync.txt)
// it finnal appends the same content to the same file using the flag option
