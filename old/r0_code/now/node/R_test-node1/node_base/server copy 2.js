// 1. Создать сервер на JS принимающий HTTP запросы.

const http = require('http');

const R_html = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" 
    crossorigin="anonymous">
    <link rel='stylesheet' href='style.css'>
  </head>
  <body>
    <h1>R_ test node js 1</h1>
    <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" 
    crossorigin="anonymous"></script>
    <script src="app.js"></script>
  </body>
  </html>
`;
const R_css = `
  h1{
    padding:5%;
    margin:auto;
    color: #146;
    background-color: #099;
    display: block;
    width: 100%;
    Height: 10%;
    text-align:center;
    border: 5px solid #234;
    font: 30px "Robot", sans-serif;
  }
`;
const R_js = ``;

http.createServer((req, res)=>{
  switch (req.url) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(R_html);
    case '/style.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(R_css);
    case '/app.js':
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.end(R_js);
    default:
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('404 not find');
  };
}).listen(3000,()=> console.log('R_server is work'));
