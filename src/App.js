import "./App.css";
import { Home } from "./Components/display/Home";
import { Header } from "./Components/heading/Header";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
