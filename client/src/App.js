import React from "react";
import About from "./components/About";
import Nav from "./components/Navigation";
import Footer from './components/Footer';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
