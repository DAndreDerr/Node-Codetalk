// What is happening in the following code snippet? 
// here we start the getTodos function
const getTodos = () => {
// we create a XMLHttpRequest
 const request = new XMLHttpRequest();

// here we setup an event listener for the "readystatechange" event
// this event will fire when the state of the http request changes
request.addEventListener('readystatechange', ()=>{

// here we create a conditional 
// inside our first if we check if the ready state equals 4 which means the request is done
// and we also check if the status is 200 which means success
 if(request.readyState === 4 && request.status ===200){
    // if the conditional passes we log the response text to the console
   console.log(request.responseText)
    }
   else if (request.readyState === 4){
    // if the request status doesn't pass we log the fail
     console.log('could not fetch the data');
   }
});

// here we do request open which uses the open method on the http request object 
// this initializes the request, it specifies that it is a GET request to the url after the comma
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// finally our function sends the request using the send() method
request.send();
}



// here we call the function 
getTodos();
getTodos();

// IN SUMMARY

// the code above is a function called getTodos
// this function uses a XMLHttpRequest to fetch data from an API
// it does this by first setting up an event listener for readystatechange to determine when to request
// if the request is complete and passes the response text is logged to console other wise a error is logged
// The function next intializes the request using the GET method