import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container />
    </div>
  );
}

export default App;
