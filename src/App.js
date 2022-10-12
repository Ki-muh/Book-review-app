import React from 'react';
import NavBar from './Navbar';
import Home from "./Home";
import About from "./About";
import Books from "./Books"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import './App.css';

function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="books" element={<Books />} />
    </Route>
  </Routes>
</BrowserRouter>)
}

export default App;