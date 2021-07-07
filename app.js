const express = require("express");
const path = require('path');
const app = express();

const port = process.env.PORT;

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
   res.render('index'); 
});

app.get('/courses', (req, res) => {
    res.render('courses');
});

app.get('/associates', (req, res) => {
    res.render('associates');
});

app.get('/donate', (req, res) => {
    res.render('donate');
});

app.get('/apply', (req, res) => {
    res.render('apply');
});

app.listen(port, () => {
    console.log("Server started at port " +  port);
});


