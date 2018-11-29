var http = require('http');
var fileSystem = require('fs');
var path = require('path');
// using stream
http.createServer(function(request, response){
    var filePath = path.join(__dirname, 'myfile.mp3');
    var stat = fileSystem.statSync(filePath);
    response.writeHead(200, {
        'Content-Type': 'audio/mpeg',
        'Content-Length': stat.size
    });
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
}).listen(2000);