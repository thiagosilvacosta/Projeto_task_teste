const express = require('express');
const server = express();
const cors = require('cors')
server.use(express.json());
server.use(cors());
const TaskRoutes = require('./routes/TaskRoutes');

server.use('/task', TaskRoutes);


server.listen(3003, ()=>{
    console.log('Executando na porta 3003');
})