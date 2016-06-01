/**
 * Created by gollum23 on 30/05/16.
 */
var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
              <div class="row">
                <div class="signup-box">
                  <h1 class="platzigram">Platzigram</h1>
                  <form action="" class="signup-form">
                    <h2>Regístrate para ver fotos de tus amigos estudiando en Platzi</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesión con facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i> Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="text" name="username" id="id_username" placeholder="Nombre de usuario">
                      <input type="password" name="password" id="id_password" placeholder="Contraseña">
                      <button class="btn waves-effect waves-light btn-signup" type="submit">Inicia sesión</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿No Tienes una cuenta? <a href="/signup">Regístrate</a>
                </div>
              </div>
            </div>`;

module.exports = landing(signinForm);