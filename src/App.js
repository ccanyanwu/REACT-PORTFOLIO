import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ParticlesBg from "particles-bg";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route
            path="/h"
            element={
              <>
                <ParticlesBg num={5} color="#fa3b86" type="random" bg={true} />

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
      </div>
    </Router>
  );
}

export default App;
