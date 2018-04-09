const express = require('express');
const app = express();

//Now attached to app, we have a bunch of methods
//to start our server and send responses to the client

app.get('/',(request, response) => {
	response.send("Hi I'm the server");
})

app.get('/anythingWeWant', (req,res) => {
	res.send('Whatever we want');	
})

app.get('/Foood',(req,res) => {
	res.send("That's that stuff I do like.");
})

app.listen(3000,() => {
	console.log("Server is listening on Port 3000");
})