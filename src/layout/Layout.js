import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>

      <div className="layout-container">
              <Outlet />

      </div>

   <footer>
    <a href="classicbooks@biblichor.com">Classicbooks@biblichor.com</a>
   </footer>

    </>
  )
};

export default Layout;