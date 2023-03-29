const express = require("express");

const handleAllRequest = (req, res) => {
  const url = req.url;
  res.setHeader("content-type", "text/html");
  if (url == "/users") {
    res.write("<h1>Welcome to User Page</h1>");
  } else if (url == "/signup") {
    res.write("<h2>Welcome to SignUp Page </h2>");
  } else if (url == "/profile") {
    res.write("<h1>Profiles</h1>");
  } else {
    res.write("Page Not Found");
  }
  res.end();
};

const handleHomeRequest = (respond, repuest) => {
  respond.send("<h1>Welcome to Home Page </h1>");
};
const server = express();
server.use(handleAllRequest);
server.use('/',handleHomeRequest)

server.listen(3000, "127.0.0.1", ()=>console.log("Server has started"));
