import React from "react";
class Elianainfo extends React.Component {
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
                <h4> Fehca de creación</h4>
                <br />
                <h6>10/09/2020 </h6>
                <br />
                <h4> Fehca ultimo inicio sesión</h4>
                <br />
                <h6>14/10/2020 </h6>
                <br />
                <h4> Telefono</h4>
                <br />
                <h6> 313444764 </h6>
                <br />
                <h4> Género</h4>
                <br />
                <h6>Mujer</h6>
                <br />
                <h4> Direcion</h4>
                <br />
                <h6>Cll 63F#52A31</h6>
                <br />
                <h4> Correo electronico</h4>
                <br />
                <h6>eliana334@gmail.com</h6>
                <br />
                <div className="col">
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/admiusuarios">Salir</a>
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

export default Elianainfo;
