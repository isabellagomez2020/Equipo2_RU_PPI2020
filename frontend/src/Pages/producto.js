import React from "react";
import LocionPacoRabanne from "../Imagenes/375x500.46038.jpg";
import "../Style/style.css";

class Producto extends React.Component {
  _Alerta() {
    Swal.fire(
      "Ingreso exitoso",
      "Redireccionando a la pantalla de Inicio Sesion"
    );
  }
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row col text-center">
              <div className="col text-center">
                <div class="elementoPrimeraPagina ">
                  <h1 className="letra1">Isabella </h1>
                  <h1 className="letra2">te lo </h1>
                  <h1 className="letra3">vende....</h1>
                </div>
                <br />
                <br />
                <div className="col">
                  <img
                    src={Carritodecompra}
                    className="rounded mx-auto d-block carritoDeCompra text"
                    alt="..."
                  />
                </div>
                <br />
              </div>
              <br />
              <button
                onClick={this._Alerta}
                type="button"
                className="btn btn-outline-dark boton boton"
              >
                <a href="/iniciosesion">Ingresar</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Producto;