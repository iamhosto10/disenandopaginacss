import React from "react";
import Crisnica from "../Images/Logo Crisnica.webp";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="menu">
      <img src={Crisnica} alt="Logo" />
      <nav>
        <ul>
          <Link to="">
            <li>Tienda</li>
          </Link>
          <Link to="">
            <li>
              ¿Que deseo mejorar?
              {/* <ul>
                <li>Tratamiento</li>
                <li>Tipo de producto</li>
              </ul> */}
            </li>
          </Link>
          <Link to="">
            <li>kits</li>
          </Link>
          <Link to="">
            <li>blog</li>
          </Link>
          <Link to="">
            <li>Marcas</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
