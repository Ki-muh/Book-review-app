import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';


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

  return(
    <div>
      <NavBar />
      <div className='container'>{component}</div>
    </div>
  )
}

export default App;
