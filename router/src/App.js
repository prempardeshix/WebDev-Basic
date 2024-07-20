import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Discover from "./components/Discover";
import Labs from "./components/Labs";
import Home from "./components/Home";
import About from "./components/About";
import Support from "./components/Support";
import Error from "./components/Error";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Discover">Discover</NavLink>
          </li>
          <li>
            <NavLink to="/Labs">Labs</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Support">Support</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
