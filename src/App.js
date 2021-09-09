import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Homepage } from "./Components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Router>
          <Route path="/weathered">
            <Header />
            <Search />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
