import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
