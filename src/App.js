import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Choice from "./choice";
import FirstStep from "./firststep";
import SecondStep from "./secondstep";
import ThirdStep from "./thirdstep";

export default function App() {
  return (

    <Router>
        <Switch>    
          <Route path="/choice">
            <Choice />
          </Route>
          <Route path="/information">
            <FirstStep />
          </Route>
          <Route path="/payment">
            <SecondStep />
          </Route>          
          <Route path="/pass">
            <ThirdStep />
          </Route>
        </Switch>
    </Router>
  );
}

