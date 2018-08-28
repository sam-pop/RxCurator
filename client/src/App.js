import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Scan from "./pages/Scan";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/scan" component={Scan} />
      </Switch>
    </div>
  </Router>
);

export default App;
