// завершение сервера ctrl+c
// const http = require('http'); // импорт http модуля с директивой require
// const hostname = '127.0.0.1'; //'localhost';
// const port = 3000;

//alt0
// const server=http.createServer((request,response)=>{
//     if(request.url==='/'){
//         response.end('R0 Hello №1');
//     } else if(request.url==='/main'){// адрес странички
//         response.end('R0 Hello №2');// содержимое странички
//     }
// }); server.listen(port, hostname, ()=>{
//     console.log(`Server running at http://${hostname}:${port}/`)
// });

// ____ alt1
// server=http.createServer((request,response)=>{
//     // response.statusCode = 200;
//     // response.setHeader('Content-Type', 'text/plain');
//     // response.end('R0 Hello №1');
//     console.log('r0 main page');//выскакивает в консоли при обнове странички сервера
//     response.writeHead(200,{'Content-Type': 'text/html'}); // ключ: значение
//     response.write('R0 Hello 1');
//     response.end();
// }).listen(port);

// ____ alt2
// const r_server = new http.Server;
// r_server.listen(80, 'localhost');
// var counter = 0;
// r_server.on('request',(req,res)=>{res.end('R0 server!'+ ++counter);});

// ____ alt3
// const r_server = http.createServer((req, res)=>{
//   console.log(`Server running at http://${hostname}:${port}`);
//   console.log(req.url, req.method);// вывод в консоль инфы
//   res.setHeader('Content-Type', 'application/json');// чтоб передавать инфу читаемую как 'text/html'
//   // res.write('R0 write');// запись в браузере
//   // res.write('<head><link rel="stylesheet" href="#"></head>');
//   const data = JSON.stringify([
//     {name: 'R1', age: '32'},
//     {name: 'R2', age: '23'}
//   ])
//   // res.end();
//   res.end(data); // ??
// }).listen(port, hostname, (error)=>{
//   error ? console.log(error) : console.log(`listening port ${port}`);
// });

// ____ alt4
