import React from "react";

class Iniciosesion extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <br />
                <h1>Nombre de usuario</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre usuario"
                  readonly
                />
                <br />
                <br />
                <h1>Contraseña</h1>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  readonly
                />
                <div className="row">
                  <div className="col text-center">
                    <br />
                    <h1> Iniciar sesión como:</h1>

                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button type="button" className="btn btn-secondary boton">
                        <a href="/menuadmi">Administrador</a>
                      </button>
                      <button type="button" className="btn btn-secondary boton">
                        <a href="/menusuario">Usuario</a>
                      </button>
                      <button type="button" className="btn btn-secondary boton">
                        <a href="/cliente">Cliente</a>
                      </button>
                    </div>
                    <br />
                    <br />
                    <div className="col text-center">
                      <br />

                      <button
                        type="button"
                        className="btn btn-outline-dark boton"
                      >
                        <a href="/registro">Registrarse</a>
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-outline-dark boton"
                      >
                        <a href="/">Salir</a>
                      </button>
                      <br />
                      <br />
                      <button
                        type="button"
                        className="btn btn-dark container-fluid fondo boton"
                      >
                        <a href="/contra">¿Olvidaste tu contraseña?</a>
                      </button>
                      <br />
                      <br />
                      <div className="container-fluid fondo boton">
                        <div className="row">
                          <div className="col text-center "></div>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-4 col-lg-4 fondo"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Iniciosesion;
