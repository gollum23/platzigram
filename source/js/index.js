/**
 * Created by gollum23 on 30/05/16.
 */
var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
    main.innerHTML = '<a href="/signup">signup</a>'
});

page('/signup', function (ctx, next) {
    var el = yo`<div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img class="iphone" src="./images/iphone.png" alt="Platzigram">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="plazigram">Platzigram</h1>
                  <form action="" class="signup-form">
                    <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesión con facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="emai" id="id_email" placeholder="Correo electrónico">
                      <input type="text" name="name" id="id_name" placeholder="Nombre completo">
                      <input type="text" name="username" id="id_username" placeholder="Nombre de usuario">
                      <input type="password" name="password" id="id_password" placeholder="Contraseña">
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Regístrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Tienes una cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    empty(main).appendChild(el);
});

page();