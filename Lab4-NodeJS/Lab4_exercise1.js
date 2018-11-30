var http = require('http');
const {fork} = require ('child_process');
var url = require('url');

http.createServer(function(request, response){
    var queryString = url.parse(request.url, true).query;
    const childProcess = fork('readFile.js');
    if(queryString.url) {
        childProcess.send(queryString.url);
        childProcess.on('message', (data) => {
            response.end(data);
        });
    } else {
        response.end('There is not any specific file name.')
    }
    
    
}).listen(2000);