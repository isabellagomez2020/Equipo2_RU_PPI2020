import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrimeraPagina from "../Pages/primerapagina";
import InicioSesion from "../Pages/iniciosesion";
import Registro from "../Pages/registro";
import Confirmacion from "../Pages/confirmacion";
import Informacion from "../Pages/informacion";
import Menuadmi from "../Pages/menuadmi";

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
      </Switch>
    </BrowserRouter>
  );
};

export default App;
