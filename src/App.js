import Category from "./components/Category";
import Search from "./components/Search";
import { Logo, Nav } from "./components/StyledComponents";
import Pages from "./pages/Pages";
import { GiKnifeFork } from "react-icons/gi";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork /> Home
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
