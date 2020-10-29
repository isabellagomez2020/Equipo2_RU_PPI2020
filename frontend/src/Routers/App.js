import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrimeraPagina from "../Pages/primerapagina";
import InicioSesion from "../Pages/iniciosesion";
import Registro from "../Pages/registro";
import Confirmacion from "../Pages/confirmacion";
import Informacion from "../Pages/informacion";
import Menuadmi from "../Pages/menuadmi";
import Admiusuarios from "../Pages/admiusuarios";
import Admiclientes from "../Pages/admiclientes";
import Franinfo from "../Pages/franinfo";
import Mariainfo from "../Pages/mariainfo";
import Sofiainfo from "../Pages/sofiainfo";
import Elianainfo from "../Pages/elianainfo";
import Menusuario from "../Pages/menususario";
import Admiproducto from "../Pages/admiproducto";
import Nuevoproducto from "../Pages/nuevoproducto";
import Cliente from "../Pages/cliente";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PrimeraPagina} />
        <Route exact path="/iniciosesion" component={InicioSesion} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/confirmacion" component={Confirmacion} />
        <Route exact path="/informacion" component={Informacion} />
        <Route exact path="/menuadmi" component={Menuadmi} />
        <Route exact path="/admiusuarios" component={Admiusuarios} />
        <Route exact path="/admiclientes" component={Admiclientes} />
        <Route exact path="/franinfo" component={Franinfo} />
        <Route exact path="/mariainfo" component={Mariainfo} />
        <Route exact path="/sofiainfo" component={Sofiainfo} />
        <Route exact path="/elianainfo" component={Elianainfo} />
        <Route exact path="/menusuario" component={Menusuario} />
        <Route exact path="/admiproducto" component={Admiproducto} />
        <Route exact path="/nuevoproducto" component={Nuevoproducto} />
        <Route exact path="/cliente" component={Cliente} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
