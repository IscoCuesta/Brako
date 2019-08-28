import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Cotizar from "./pages/Cotizar";
import Carrito from "./pages/Carrito";
import Welcome from "./pages/Welcome";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/cotizar" component={Cotizar} />
          <Route exact path="/carrito" component={Carrito} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
