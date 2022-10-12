import { Outlet, Link } from "react-router-dom";
import "./Layout.css"
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/books">Books</Link>
        </ul>
      </nav>

      <div className="layout-container">
              <Outlet />

      </div>

   <footer>
    <p>For any queries, contact us by sending an email to us via <a href="classicbooks@biblichor.com">Classicbooks@biblichor.com</a>.</p>
   </footer>

    </>
  )
};

export default Layout;