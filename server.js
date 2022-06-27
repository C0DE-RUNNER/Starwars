const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');


MongoClient.connect('mongodb+srv://starwars:starwars%40123@cluster0.idlrdxn.mongodb.net/?retryWrites=true&w=majority')
.then(client => {
    console.log('Connected to Database');
    const db = client.db('starwars-quotes');
    const quoteCollection = db.collection('quotes');
    
    app.use(bodyParser.urlencoded({ extended: true }))
    
    app.get('/', (req, res) => {
        db.collection('quotes').find().toArray()
    .then(results => {
      console.log(results)
      res.render('index.ejs', { quotes: results })
    })
    .catch(error => console.error(error))
   
})
    
    app.post('/quotes', (req,res) => {
        quoteCollection.insertOne(req.body)
        .then(result => {
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    app.listen(3000, function(){
        console.log('listening on 3000');
    })

  })
.catch(console.error);


