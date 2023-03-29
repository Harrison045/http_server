const express = require("express");

const handleAllRequest = (request, response) => {
  const url = request.url;
  response.setHeader("content-type", "text/html");

  response.write("Page unavailable");

  response.end();
};

const handleHomeRequest = (req, res) => {
  res.send("<h1>Welcome to home page</h1>");
};

const handleAboutRequest = (req, res) => {
  res.send("<h1>Welcome to About page</h1>");
};
const handleContactRequest = (req, res) => {
  res.send("<h1>Welcome to Contact page</h1>");
};

const server = express();
server.use("/contact", handleContactRequest);
server.use("/about", handleAboutRequest);
server.use("/", handleHomeRequest);

server.use(handleAllRequest);

server.listen(4000, () => {
  console.log("server started on port 4000");
});
