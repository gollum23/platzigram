/**
 * Created by gollum23 on 30/05/16.
 */
var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');

var template = function (pictures) {

};

module.exports = function (pictures) {
    var el = yo`<div class="container timeline">
      <div class="row">
        <div class="col s12 m10 offset-m1 l6 offset-l3">
            ${pictures.map(function (pic) {
                return picture(pic);
            })}
        </div>
      </div>
    </div>`;

    return layout(el);
};