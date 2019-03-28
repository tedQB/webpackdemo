var http = require('http');

http.createServer(function (request,response) {
    var body = [];

    console.log('request.method',request.method);
    console.log('request.headers',request.headers);

    request.on('data',function(chunk) {
        body.push(chunk)
    })

    request.on('end',function() {
        body = Buffer.concat(body);
        console.log('body',body.toString())
    })

    response.writeHead(200, { 'Content-Type': 'text-plain' });
    response.end('Hello World\n');

}).listen(8124)