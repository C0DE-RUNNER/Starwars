const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log('listening on 3000');
})

app.get('/', (req, res) => {
    res.sendFile('C:/Users/thaku/Desktop/100-Devs/Projects/StarWars/index.html');
})

app.post('/quotes', (req,res) => {
    console.log("Hellooooooooooooooooo")
})

