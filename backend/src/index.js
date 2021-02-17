const express = require('express')
const server = express()

server.get('/teste', (req,res)=>{
    res.send('Tudo certo com nossa API')
})

server.listen(3000, ()=>{
    console.log('Executando na porta 3000')
})