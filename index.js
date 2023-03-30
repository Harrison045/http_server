const express =require('express')

const server=express()

const handleAllTypesOfRequest=(req,res)=>{
  res.send('welcome to home page')
}

const handleLogin=(req,res)=>{
  res.send('this is login used with post')
}
//middleware function

const middleWareFunction =(req,res,next)=>{
  console.log('hello this is middleware');
  next()
}

const loginRouteSpecificMiddleware=(req,res,next)=>{
  console.log('login route has begun');
  next()
}

//middleware
// server.use(middleWareFunction)

//routes
server.get('/contact',(req,res)=>res.send('this is contact used with get'))
server.post('/login',loginRouteSpecificMiddleware, handleLogin)
server.put('/profile',(req,res)=>res.send('this is profile used with delete'))
server.delete('/services',(req,res)=>res.send('this is services used with delete'))
server.use('/',handleAllTypesOfRequest)

server.listen(4000,()=>console.log('server has started'))