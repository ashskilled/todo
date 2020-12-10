//Load in the express module
const express = require('express');  

//creates a new express application 
const app = express(); 
 
//declare the port we want to connect to 
const port = 3000; 

//opening up our server to listen on a specific ip address and port 
//ip addresses are also known as hostnames 
app.listen(port, function(){
    console.log("The server is running at port " + port); 
});

//first api call 
//127.0.0.1:3000/ 
app.get('/', function(request, response){
    response.send("hello world!"); 
}); 

//127.0.0.1:3000/name 
app.get('/name', function(request, response){
    response.send("Willie"); 
});

