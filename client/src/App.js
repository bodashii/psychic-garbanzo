import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
          <About></About>
    </div>
  );
}

export default App;
