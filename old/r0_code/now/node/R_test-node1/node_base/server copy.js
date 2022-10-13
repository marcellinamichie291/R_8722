// 1. Создать сервер на JS принимающий HTTP запросы.
const http = require('http');
const server = http.createServer();

server.on('request',(req, res)=>{
    res.end('R0 res.end');
});

server.listen(3000,()=> console.log('R_server is work'));

// server.listen(3000,()=>{ // port, function
//     console.log('server start')
// })

