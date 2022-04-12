import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { CheckOut } from "./Components/checkout/CheckOut";
import { Home } from "./Components/display/Home";
import { Header } from "./Components/heading/Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout">
            <CheckOut />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
