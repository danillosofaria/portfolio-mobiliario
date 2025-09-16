import { Link } from "react-router";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="caixa-logo">
        <Link className="logo-type" to="/">Danillo <br></br> Faria</Link>
      </div>

      <div className="main-menu">
        <ul>
          <li><Link to="/WorkPage">Work</Link></li>
          <li><Link to="/StudioPage">Studio</Link></li>
          <li><Link to="/ContactPage">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
