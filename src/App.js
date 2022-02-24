import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import All from "./components/All";
import Portfolio from './pages/Portfolio'
import Javascript from "./components/Javascript";
import Html from "./components/Html";
import ReactTab from "./components/ReactTab";

function App() {
  const tabContent = [
    {
      id: "pills-all",
      active: "active",
      label: "pills-all-tab",
    },
    {
      id: "pills-react",
      label: "pills-react-tab",
    },
    {
      id: "pills-javascript",
      label: "pills-javascript-tab",
    },
    {
      id: "pills-html",
      label: "pills-html-tab",
    },
  ];
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />}>
            <Route path="all" element={<All />} />
            <Route path="react" element={<ReactTab />} />
            <Route path="js" element={<Javascript />} />
            <Route path="html" element={<Html />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
