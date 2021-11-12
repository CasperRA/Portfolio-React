import React from "react";
import "../styles/global.css";
import "../styles/burgermenu.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";

function Navigation() {
  return (
    <Menu right id="menu-container">
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <div className="no-hover pt-16 pb-2">
        <h2 className="text-3xl no-hover text-left">Projects</h2>
        <div className="w-4/5 h-1 prim-white mt-1"></div>
      </div>
      <a id="about" className="menu-item" href="/Provsti">
        Provsti
      </a>
      <a id="about" className="menu-item" href="/Nordvest">
        Nordvest Ølbar
      </a>
      <a id="about" className="menu-item" href="/Genskab">
        Genskab
      </a>
    </Menu>
  );
}

export default Navigation;
