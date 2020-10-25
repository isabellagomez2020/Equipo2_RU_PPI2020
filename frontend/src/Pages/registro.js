import React from "react";

class Registro extends React.Component {
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

                <h1>Nombre</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre "
                  readonly
                />

                <h1>Apellido</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apellido"
                  readonly
                />

                <h1>Fecha de nacimiento</h1>
                <select id="inputState" class="form-control">
                  <option selected>Mes</option>
                  <option> Enero </option>
                  <option> Febrero </option>
                  <option> Marzo </option>
                  <option> Abril </option>
                  <option> Mayo </option>
                  <option> Junio </option>
                  <option> Juilio </option>
                  <option> Agosto </option>
                  <option> Septiembre </option>
                  <option> Octubre </option>
                  <option> Noviembre</option>
                  <option> Disciembre </option>
                </select>
                <br />
                <select id="inputState" class="form-control">
                  <option selected>Dia</option>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
                  <option> 6</option>
                  <option> 7 </option>
                  <option> 8 </option>
                  <option> 9 </option>
                  <option> 10 </option>
                  <option> 11</option>
                  <option> 12 </option>
                </select>
                <br />
                <select id="inputState" class="form-control">
                  <option selected>Año</option>
                  <option> 1 </option>
                  <option> 2 </option>
                  <option> 3 </option>
                  <option> 4 </option>
                  <option> 5 </option>
                  <option> 6</option>
                  <option> 7 </option>
                  <option> 8 </option>
                  <option> 9 </option>
                  <option> 10 </option>
                  <option> 11</option>
                  <option> 12 </option>
                </select>

                <h1>Correo electronico</h1>
                <input
                  class="form-control"
                  type="E-mail"
                  placeholder="E-mail"
                  readonly
                />
                <br />
                <h1>Contraseña</h1>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  readonly
                />
                <br />
                <h1>Confirmar contraseña</h1>
                <input
                  class="form-control"
                  type="password"
                  placeholder="Contraseña"
                  readonly
                />
                <br />
                <select id="inputState" class="form-control">
                  <option selected>Genero</option>
                  <option> Hombre </option>
                  <option> Mujer </option>
                </select>
                <br />
                <div className="col">
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/confirmacion">Continuar</a>
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
