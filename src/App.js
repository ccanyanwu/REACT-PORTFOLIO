import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";
import { useContext } from "react";
import Loader from "./components/Loader";

const Div = styled.div`
  .dark {
    background-color: #15202b !important;
  }
  .light {
    background-color: var(--background);
  }
`;

function App() {
  const [loading, setLoading] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const location = useLocation().pathname;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <Div>
      <div
        className={`App ${darkMode ? "dark" : "light"} ${
          location === "/" && "Apps"
        }`}
      >
        <Navbar />
        <Toggle />
        <Routes>
          <Route exact path="/" element={<Home dark={darkMode} />} />
          <Route path="/about" element={<About dark={darkMode} />} />
          <Route path="/services" element={<Services dark={darkMode} />} />
          <Route path="/portfolio" element={<Portfolio dark={darkMode} />} />
          <Route path="/contact" element={<Contact dark={darkMode} />} />
        </Routes>
        <Footer />
      </div>
      <ToastContainer autoClose={3000} />
    </Div>
  );
}

export default App;
