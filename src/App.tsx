import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VjezbaJedan from "./Components/Vjezbe/VjezbaJedan";
import VjezbaDva from "./Components/Vjezbe/VjezbaDva";
import VjezbaDvaCSS from "./Components/Vjezbe/VjezbaDvaCSS";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vjezba01" exact component={VjezbaJedan} />
        <Route path="/vjezba02" exact component={VjezbaDva} />
        <Route path="/vjezba02css" exact component={VjezbaDvaCSS} />
      </Switch>
    </Router>
  );
}

export default App;
