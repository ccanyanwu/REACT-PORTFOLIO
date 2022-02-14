import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesBg from "particles-bg";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ParticlesBg num={1} color="#fa3b86" type="polygon" bg={true} />

                <header className="App-header">
                  <p>
                    Edit <code>src/App.js</code> and saves to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
