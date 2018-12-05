var express = require('express');
var app = express();
var bodyparser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
let db;
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    console.log('app.use');
    if(!db) {
        console.log('Initiate Database connection')
        client.connect(function(err){
            db = client.db('testDB');
            next();
        });
    } else {
        next();
    }
});

app.post('/save', function(req, res) {
    console.log('app.post(save)');
    console.log(req.body);
    if(req.body) {
        console.log('Inserting data');
        db.collection('locations').insertOne(req.body);
        res.end('Inserted');
    } else {
        res.end('Invalid data');
    }
});

app.post('/find', function(req, res) {
    console.log('finding');
    if(req.body) {
        var cursor = db.collection('locations').find({location:{$near:[req.body.currentLong, req.body.currentLat]}},
            {_id:0})
        .limit(3);
        cursor.toArray((err, docs) => res.json(docs));
    } else {
        res.end('Invalid data');
    }
});

app.listen(3000);