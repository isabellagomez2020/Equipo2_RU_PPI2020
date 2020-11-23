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
                <h1> Crea tu cuenta </h1>
                <br />
                <h3>Nombre</h3>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Nombre"
                  readonly
                />
                <br />
                <h3>Apellido</h3>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Apellido"
                  readonly
                />
                <br />
                <h3> Fecha de nacimiento </h3>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Mes</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Enero</option>
                    <option>Febrero</option>
                    <option>Marzo</option>
                    <option>Abril</option>
                    <option>Mayo</option>
                    <option>Junio</option>
                    <option>Julio</option>
                    <option>Agosto</option>
                    <option>Septiembre</option>
                    <option>Octubre</option>
                    <option>Noviembre</option>
                    <option>Diciembre</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Dia</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Año</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="exampleInputEmail1">Correo electronico</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    
                  </small>
                </div>
                <br />

                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <br />
                <div class="form-group">
                  <label for="exampleInputPassword1">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <br/>
                <h3> Genero </h3>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Genero</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Hombre</option>
                    <option>Mujer</option>
                  </select>
                </div>
                <br/>
                <div className="col">
                  <button
                    onClick={this._Alerta}
                    type="button"
                    className="btn btn-outline-dark boton"
                  >
                    <a href="/informacion">Continuar</a>
                  </button>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
