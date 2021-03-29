import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VjezbaJedan from "./Components/Vjezbe/VjezbaJedan";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vjezba01" exact component={VjezbaJedan} />
      </Switch>
    </Router>
  );
}

export default App;
