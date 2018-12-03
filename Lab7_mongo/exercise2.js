// Dependencies & Instantiations & Configuration, Middleware
var express = require('express');
var crypto = require('crypto');
const MongoClient = require('mongodb').MongoClient;
const client = MongoClient('mongodb://localhost:27017');
var app = express();
const secret = 'asaadsaad';
var cipher = crypto.createDecipher('aes256', secret);
// Routes & Error Handling
app.get('/', function(req, res){
    client.connect(function(err){
        const db = client.db('testDB');
        const collection = db.collection('homework7');
        collection.findOne({}, function(err, doc){
            console.dir(doc.message);
            var message = cipher.update(doc.message, 'hex', 'utf8')
            message += cipher.final('utf8');

            res.status(200);
            res.set('Content_type', 'application/json');
            res.send(JSON.stringify(message));
            res.end;
            client.close();
        })
    });
    
    
})

// Server listen
app.listen(3000);