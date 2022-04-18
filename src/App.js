import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { CheckOut } from "./Components/checkout/CheckOut";
import { Home } from "./Components/display/Home";
import { Header } from "./Components/heading/Header";
import { Login } from "./Components/login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <CheckOut />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
