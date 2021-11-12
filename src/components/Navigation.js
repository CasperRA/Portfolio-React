import React from "react";
import "../styles/global.css";
import "../styles/burgermenu.css";
import "aos/dist/aos.css";
import { slide as Menu } from "react-burger-menu";
import { Link } from "gatsby";

function Navigation() {
  return (
    <Menu right id="menu-container">
      <Link id="home" className="menu-item" href="/">
        Home
      </Link>
      <div className="no-hover pt-16 pb-2">
        <h2 className="text-3xl no-hover text-left pl-4">Projects</h2>
        <div className="w-3/5 h-1 prim-white mt-1"></div>
      </div>
      <Link className="menu-item" href="/Provsti">
        Næstved Provsti
      </Link>
      <Link className="menu-item" href="/Gaston">
        Gaston Media
      </Link>
      <Link className="menu-item" href="/Nordvest">
        Nordvest Ølbar
      </Link>
      <Link className="menu-item" href="/Genskab">
        Genskab
      </Link>
    </Menu>
  );
}

export default Navigation;
