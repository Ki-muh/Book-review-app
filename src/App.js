import React from 'react';
import NavBar from './Navbar';
import Home from './Home';
import About from './About';


function App() {
  return(
    <div>
      <NavBar />
      <div className='container'>{component}</div>
    </div>
  )
}

export default App;
