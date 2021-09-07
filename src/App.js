import "./App.scss";
import { Header } from "./Components/Header/Header";
import { Search } from "./Components/Search/Search";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;
