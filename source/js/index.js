/**
 * Created by gollum23 on 30/05/16.
 */
var page = require('page');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
    main.innerHTML = 'Home'
});

page('/signup', function (ctx, next) {
    main.innerHTML = 'Signup'
});

page();