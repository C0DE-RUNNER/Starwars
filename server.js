const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClint = require('mongodb').MongoClient;


app.listen(3000, function(){
    console.log('listening on 3000');
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('C:/Users/thaku/Desktop/100-Devs/Projects/StarWars/index.html');
})

app.post('/quotes', (req,res) => {
    console.log(req.body);
})

