import React from "react";
import Swal from "sweetalert2";
class Nuevoproducto extends React.Component {
  _Alerta() {
    Swal.fire("Añadido exitoso");
  }
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12">
                <br />
                <h1> Añadir producto </h1>
                <br />
                <h3>Insertar titulo del producto </h3>
                <input
                  class="form-control"
                  type="text"
                  placeholder=" titulo del producto"
                  readonly
                />
                <br />
                <br />
                <h3>Subir foto del producto </h3>
                <input
                  class="form-control"
                  type="text"
                  placeholder="foto del producto"
                  readonly
                />
                <br />
                <h3>Insertar valor del producto</h3>
                <input
                  class="form-control"
                  type="text"
                  placeholder="valor del producto"
                  readonly
                />
                <div className="col text-center">
                  <br />

                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/menusuario">Añadir producto a la venta </a>
                  </button>
                  <br />
                  <br />
                  <button type="button" className="btn btn-outline-dark boton">
                    <a href="/menusuario">Salir</a>
                  </button>

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
    );
  }
}
export default Nuevoproducto;
