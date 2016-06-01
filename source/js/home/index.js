/**
 * Created by gollum23 on 30/05/16.
 */
var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
    title('Platzigram');
    var main = document.getElementById('main-container');
    var pictures = [
        {
            user: {
                username: 'gollum23',
                avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/p160x160/16998_10153010185138683_8210567450819313296_n.jpg?oh=e62a039be365c39cee8df4bc95ff99a8&oe=57D7DFBC&__gda__=1472875634_6b00ffbb56b929de9b2a9170162768e7'
            },
            url: 'http://materializecss.com/images/office.jpg',
            title: 'Card 1',
            likes: 100,
            liked: true
        },
        {
            user: {
                username: 'gollum23',
                avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpt1/v/t1.0-1/p160x160/16998_10153010185138683_8210567450819313296_n.jpg?oh=e62a039be365c39cee8df4bc95ff99a8&oe=57D7DFBC&__gda__=1472875634_6b00ffbb56b929de9b2a9170162768e7'
            },
            url: 'http://materializecss.com/images/office.jpg',
            title: 'Card 2',
            likes: 100,
            liked: true
        }
    ];
    empty(main).appendChild(template(pictures));
});