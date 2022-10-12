import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './Navbar';
import Home from "./Home";
import About from "./About";
import Books from "./Books"
import './App.css';

function App() {
   return (
    <div>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <footer>
        <p>For any queries, contact us by sending an email to us via <a href="classicbooks@biblichor.com">Classicbooks@biblichor.com</a>.</p>
        <p>Or call <a href='0799******'>+254-744-546-199</a></p>
      </footer>
    </div>
  )
}

export default App;
