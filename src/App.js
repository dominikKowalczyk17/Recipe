import Category from "./components/Category";
import Search from "./components/Search";
import { Logo, Nav } from "./components/StyledComponents";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={"/"}>
            <GiKnifeFork /> Home
          </Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
