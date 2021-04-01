const express = require('express');

app = express();

app.get('/', (req, res) => {
    res.send('Hi')
});

app.listen('8080');
console.log('listening on 8080')