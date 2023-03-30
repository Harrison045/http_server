const express = require("express");

const server = express();

const handleAllRequest=(req, res)=>{
  res.send("Respond Recieved")
}

const handleLoginPutRequestType=(req,res)=>{
  res.send('Put respond is out')
}

server.get('/', handleAllRequest)
server.put('/contact', handleLoginPutRequestType)
server.post('/profile',(req,res)=>res.send('Welcome Home Dude'))
server.delete('/login',(req,res)=>res.send('Welcome Home Delete'))

server.listen(4000, () => {
  console.log("server started on port 4000");
});
