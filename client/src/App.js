import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scan from "./pages/Scan";
import Signin from "./pages/Signin";
// import Home from "./pages/Detail";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/scan" component={Scan} />
        <Route exact path="/signin" component={Signin} />
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
