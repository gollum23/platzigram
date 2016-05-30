/**
 * Created by gollum23 on 30/05/16.
 */
var page = require('page');

page('/', function (ctx, next) {
    var main = document.getElementById('main-container');
    main.innerHTML = '<a href="/signup">signup</a>'
});