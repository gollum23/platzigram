/**
 * Created by gollum23 on 30/05/16.
 */
var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.render('index')
});

app.listen(3000, function(err) {
    if (err) return console.log('Hubo un error'), process.exit(1);

    console.log("Platzigram corriendo en el puerto 3000");
});