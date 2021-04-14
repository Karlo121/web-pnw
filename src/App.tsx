import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VjezbaJedan from "./Components/Vjezbe/VjezbaJedan";
import VjezbaDva from "./Components/Vjezbe/VjezbaDva";
import VjezbaDvaCSS from "./Components/Vjezbe/VjezbaDvaCSS";
import VjezbaFour from "./Components/Vjezbe/VjezbaFour";
import formaJedan from "./Components/Forme/formaJedan";
import formaDva from "./Components/Forme/formaDva";
import formaTri from "./Components/Forme/formaTri";
import formaCetiri from "./Components/Forme/formaCetiri";
import formaPet from "./Components/Forme/formaPet";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vjezba01" exact component={VjezbaJedan} />
        <Route path="/vjezba02" exact component={VjezbaDva} />
        <Route path="/vjezba02css" exact component={VjezbaDvaCSS} />
        <Route path="/vjezba04" exact component={VjezbaFour} />
        <Route path="/forma01" exact component={formaJedan} />
        <Route path="/forma02" exact component={formaDva} />
        <Route path="/forma03" exact component={formaTri} />
        <Route path="/forma04" exact component={formaCetiri} />
        <Route path="/forma05" exact component={formaPet} />
      </Switch>
    </Router>
  );
}

export default App;
