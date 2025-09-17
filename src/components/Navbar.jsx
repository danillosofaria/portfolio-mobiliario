import { Link } from "react-router";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-content">
      <div className="caixa-logo">
        <Link className="logo-type" to="/">Danillo <br></br> Faria</Link>
      </div>

      <div className="main-menu">
        <ul>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/studio">Studio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
