/**
 * Created by gollum23 on 30/05/16.
 */
var page = require('page');
var title = require('title');

page('/', function (ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');
    main.innerHTML = '<a href="/signup">signup</a>'
});