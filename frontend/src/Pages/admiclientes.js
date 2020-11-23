import React from "react";
class Admiclientes extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12 a">
                <br />
                <br />
                <a href="/sofiainfo"> Sofia Vergara Londoño </a>
                <br />
                <br />
                <a href="/franinfo"> Francisco Andrés Espinosa </a>
                <br />
                <br />
                <a href="/mariainfo"> Maria de la Luz Suárez </a>
                <br />
                <br />

                <div className="col">
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/menuadmi">Salir</a>
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

export default Admiclientes;
