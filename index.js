const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const server = express()


const loginRequestPath=(req,res)=>{
  console.log(req.body)
  res.send('Done')
}

//middle Ware

server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({extended:false}))

//route
server.use('/login', loginRequestPath)


server.listen(4000,()=>console.log('server has started'))