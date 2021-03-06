const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'))
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');


MongoClient.connect(STRING)
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


  app.put('/quotes', (req, res) => {
    quoteCollection.findOneAndUpdate(
        { name: 'Yoda' },
        {
          $set: {
            name: req.body.name,
            quote: req.body.quote
          }
        },
        {
          upsert: true
        }
      )
      .then(result => {
        console.log(result)
        res.json(result)
       })
      .catch(error => console.error(error))
      })

      app.delete('/quotes', (req, res) => {
        quoteCollection.deleteOne( { name: req.body.name })
          .then(result => {
            if (result.deletedCount === 0) {
              return res.json('No quote to delete')
            }
            res.json(`Deleted Darth Vadar's quote`)
          })
          .catch(error => console.error(error))
      })


    app.listen(3000, function(){
        console.log('listening on 3000');
    })

  })
.catch(console.error);


