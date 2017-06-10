const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('landpage.hbs')
});

app.get('/jogos', (req, res) => {
  res.render('jogos.hbs')
});

app.get('/jogo1', (req, res) => {
  res.render('jogo1.hbs')
});

app.get('/jogo2', (req, res) => {
  res.render('jogo2.hbs')
});

app.listen(3000);
