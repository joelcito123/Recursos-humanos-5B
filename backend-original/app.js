const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('funcionando')
})

app.listen(3080, () => {
    console.log('funcionando');
})