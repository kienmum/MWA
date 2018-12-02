var express = require('express');
var axios = require('axios');
var {from} = require('rxjs');
var port = 3000;
var app = express();
const urlLink = 'https://randomuser.me/api/?results=10';
app.set('strict routing', true);
app.enable('case sensitive routing');
app.set('trust proxy', true);
app.enable('strict proxy');
var oneDay = 86400000;
app.use(express.static(__dirname, {
    maxAge: oneDay
}));
app.get('/users', function(request, response) {    
    var promise = axios.get(urlLink);
    from(promise).subscribe(res => {
              // console.log(res.data);
        response.status(200);
        response.set('Content-type', 'application/json');
        response.send(res.data);
        response.end();
    })    
})
app.listen(port, function(){
    console.log('Listening on port %s. Using Observables', port);
})