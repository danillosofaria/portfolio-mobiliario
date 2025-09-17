import { Link } from "react-router";
import "./FooterSection.css";
import { FaInstagram } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="footer-section">
        
      <div className="footer-top-button" onClick={scrollToTop}>
        <FaChevronUp size={24} color="#f24822" />
        Back to top
      </div>
        <div className="booton-box-footer">
          <div className="footer-content">
            <div className="footer-column-1">
          <h3>
            designed by <br /> Danillo Faria
          </h3>
          <span>© 2025</span>
            </div>

            <ul className="footer-menu">
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/studio">Studio</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
            </ul>

            <div className="footer-column-3">
          <div>
            <h3>Address:</h3>
            <p>Rua Tardariz, 323. 4510-442, Porto - Portugal</p>
          </div>
          <div className="link-instagram">
            <a
              href="https://www.instagram.com/oficiolenho/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} /> Instagram
            </a>
          </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
