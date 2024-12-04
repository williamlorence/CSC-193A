'use strict';
const express = require('express');
const app = express();

// define all endpoints here
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
});

//EXERCISE 1
app.get('/math/circle/:r', function (req, res) {
    let r = req.params['r'];

    if (isNaN(r) || r <= 0) {
        res.type('text').status(400).send('Error, invalid radius!');
    }

    let pi = Math.PI
    let area = pi * r * r
    let circ = 2 * pi * r 
    res.type('json');
    res.send({area: area.toFixed(2), circumference: circ.toFixed(2)});
});

//EXERCISE 2
app.get('/hello/name/', function (req, res) {
    const { first, last } = req.query;
    
    if (!first || !last) {
        let missing = [];
        if (!first) missing.push('first');
        if (!last) missing.push('last');

        let params = missing[0];
        if (missing.length > 1)
            params += (', ' + missing[1]);

        res.type('text').status(400).send('Missing Required GET parameters: ' + params + '.');
        return
    }

    res.type('text');
    res.send('Hello, ' + first + ' ' + last + '!');
});

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);