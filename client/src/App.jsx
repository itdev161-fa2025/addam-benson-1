import "./App.css";
import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { List } from "./components/list/List";
import { Navigation } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <Container>
      <Navigation/>
        <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/chore' element={<List/>}/>
       </Routes>

      <Footer />
    </Container>
  );
}

export default App;
