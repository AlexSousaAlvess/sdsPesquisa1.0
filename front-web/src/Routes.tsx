import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Charts from "./pages/Charts";
import Home from "./pages/Home";
import Records from "./pages/Records";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/records">
        <Records />
      </Route>
      <Route path="/charts">
        <Charts />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
