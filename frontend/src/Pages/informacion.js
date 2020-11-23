import React from "react";
class Informacion extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <h1>!Danos tu información!</h1>
                <br />

                <h1>Dirección</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Direcion "
                  readonly
                />
                <br />
                <h1>Teléfono</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Telefono "
                  readonly
                />
                <br />
                <h1>Código postal</h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Codogo postal "
                  readonly
                />
                <br />
                <h1>Apartamento/recidencia </h1>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apartamento/recidencia"
                  readonly
                />
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

export default Informacion;
