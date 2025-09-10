import "./navbar.css";
import Menu_item from "./Menu_item";
import { useState } from "react";

function Navbar() {
  const [clickedIndex, setClickedIndex] = useState(null);

  const links = [
    { label: "Work", href: "/work" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav>
      <div className="caixa-logo">
        <a className="logo-type" href="/">Danillo Faria</a>
      </div>

      <div className="main-menu">
        <ul>
          {links.map((item, index) => (
            <li key={item.href}>
              <Menu_item
                label={item.label}
                href={item.href}
                clicked={clickedIndex === index}
                onClick={() => setClickedIndex(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;