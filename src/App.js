import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";
import { Homepage } from "./Components/Homepage/Homepage";
import reactLogo from "../src/Components/Homepage/react-icon.png";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { CountdownTimer } from "./Components/CountdownTimer/CountdownTimer";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Router>
          <Link to="/">
            <header className="header">
              <img className="react-logo" alt="" src={reactLogo} />
              <h1>React Apps</h1>
            </header>
          </Link>
          <Switch>
            <Route path="/weathered">
              <Header />
              <Search />
            </Route>
            <Route path="/countdown-timer">
              <CountdownTimer />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
