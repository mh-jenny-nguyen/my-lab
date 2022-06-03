import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";
// import { ConnectedRouter } from "connected-react-router";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
