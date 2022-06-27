const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb+srv://starwars:starwars%40123@cluster0.idlrdxn.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected to Database');
    const db = client.db('starwars-quotes');
    const quoteCollection = db.collection('quotes');
    
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/', (req, res) => {
        res.sendFile('C:/Users/thaku/Desktop/100-Devs/Projects/StarWars/index.html');
    })
    
    app.post('/quotes', (req,res) => {
        quoteCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function(){
        console.log('listening on 3000');
    })

  })
.catch(console.error);


