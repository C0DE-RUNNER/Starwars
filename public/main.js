app.use(express.static('public'))


const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Darth Vadar',
        quote: 'I find your lack of faith disturbing.'
      })
    })
  })

  app.use(bodyParser.json());

  app.put('/quotes', (req, res) => {
    console.log(req.body)
  })

  quotesCollection.findOneAndUpdate(
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
    .then(result => {/* ... */})
    .catch(error => console.error(error))

    app.put('/quotes', (req, res) => {
        quotesCollection.findOneAndUpdate(/* ... */)
          .then(result => {
             res.json('Success')
           })
          .catch(error => console.error(error))
      })

      fetch({ /* request */ })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(response => {
    console.log(response)
  })