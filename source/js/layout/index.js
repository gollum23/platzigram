/**
 * Created by gollum23 on 31/05/16.
 */
var yo = require('yo-yo');

module.exports = function (content ) {
    return yo`<div>
    <nav class="header">
      <div class="nav-wrapper">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 offset-m1">
              <a href="#" class="platzigram brand-logo">Platzigram</a>
            </div>
            <div class="col s2 push-s10">
               <a href="" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
                <i class="fa fa-user" aria-hidden="true"></i>
               </a>
               <ul id="drop-user" class="dropdown-content">
                 <li><a href="#">Salir</a></li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="content">
      ${content}
    </div>
</div>`;
};