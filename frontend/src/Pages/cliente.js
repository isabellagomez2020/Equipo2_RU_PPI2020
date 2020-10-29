import React from "react";
class Cliente extends React.Component {
  render() {
    return (
      <div className="container-fluid fondo">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4"></div>
          <div className="col-sm-4 col-md-4 col-lg-4">
            <div className="row">
              <div className="col-lg-12 a">
                <div className="col">
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-dark boton"
                    >
                      <a href="/producto">Producto</a>
                    </button>
                  </div>
                  <br />
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-dark boton"
                    >
                      <a href="/informacion">Rango de precio</a>
                    </button>
                  </div>

                  <br />
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-dark boton"
                    >
                      <a href="/informacion">Categoria de productos</a>
                    </button>
                  </div>

                  <br />
                  <div className="col">
                    <button
                      type="button"
                      className="btn btn-outline-dark boton"
                    >
                      <a href="/informacion">Realizar pedido</a>
                    </button>
                    <br />
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-outline-dark boton"
                      >
                        <a href="/informacion">Cerrar sesion</a>
                      </button>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cliente;
