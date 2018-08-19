import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scan from "./pages/Scan";
// import Home from "./pages/Detail";
// import Signin from "./pages/NoMatch";
// import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Switch>
        <Route exact path="/" component={Scan} />
        {/* <Route exact path="/books" component={Books} /> */}
        {/* <Route exact path="/books/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
