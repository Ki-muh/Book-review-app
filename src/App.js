import React from 'react';
// import { Route, Route, Switch } from "react-router-dom";
import NavBar from './Navbar';
import Home from "./Home";
import About from "./About";
import Books from "./Books"
import './App.css';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/about":
      component = <About />
    case "books":
      component = <Books />
      break;
  }
  return (
    <div>
      <NavBar />
      <div className='container'>{component}</div>
    </div>
    // <Books />
    // <Switch>
      // <Route path="/" exact component={Home} />
    //   <Route path="/about" exact component={About} />
    //   <Route path="/books" exact component={Books} />
    // </Switch>
  )
}

export default App;
