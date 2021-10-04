require('dotenv').config()
console.log(`web46 rulez`)
const express = require('express')
const server = express()
server.use(express.json())
server.get('/hello', (req,  res)=> {
    res.send('<h1> hello there! </h1>')
})
const port = process.env.PORT ||3000

server.listen(port, ()=> {
    console.log(`listening on ${port}`)
})