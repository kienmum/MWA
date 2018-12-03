var express = require('express');
var Grades = require('./grades');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var cors = require('cors');
var {check, validationResult} = require('express-validator/check');

var grades = new Grades();
grades.createMockData();
var app = express();
var router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.route('/grades/:id')
.get(function(req, res, next){
    res.set('Content_type', 'application/json');
    let item = grades.get(req.params.id);
    // item = JSON.stringify();     
    res.send(item);
})
.delete(function(req, res){
    res.set('Content_type', 'application/json');
    let item = grades.del(req.params.id);
    // item = JSON.stringify();     
    res.send(item);
});
router.route('/grades')
.post([
    check('name').isLength({min:5})
],function(req, res, next){
    // console.log(req.body); 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    if(req.body && req.body.id) {
        let item = grades.addItem(req.body);
        res.set('Content_type', 'application/json');
        res.send(JSON.stringify(item));
    } else {
        res.send('Data is invalid');
    }
    
})
.put(function(req, res) {
    if(req.body && req.body.id) {
        console.log(req.body);  
        let item = grades.update(req.body);
        res.set('Content_type', 'application/json');
        res.send(JSON.stringify(item));
    } else {
        res.send('Data is invalid');
    }
});
app.use(cors());
app.use(morgan('combined'));
app.use('/', router);
app.listen(3000);