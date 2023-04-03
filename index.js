const express = require("express");
const path = require('path')
const server = express();

//middle ware

server.use ( express.static(path.join(__dirname,'public')))

// this is the maunal method of adding route to nodejs, it is used to target specific documents

// const serveHomepage=(req,res)=>{

//   //1. Find the file


//   const homepageFile= path.join(__dirname,'public', 'index.html')

//   //2. route definition


//   res.sendFile(homepageFile)
// }

// const serveAboutPage=(req,res) =>{
//   const aboutpageFile = path.join(__dirname,'public', 'profile.html')
//   res.sendFile(aboutpageFile)
// }

// server.get('/', serveHomepage)
// server.get('/profile', serveAboutPage)


server.listen(4000, () => {
  console.log("server started on port 4000");
});
