const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.get('/home', function(req, res){
    console.log(res.query);
    let one = req.query.one;
    let two = req.query.numtwo;
    res.send('HI!')
})

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})