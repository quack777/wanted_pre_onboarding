import React, { useState } from "react";
import NavTop from "./navTop";
import NavMenu from "./navMenu";
import NavAside from "./navAside";
import "../css/nav.css"

function Nav () {
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <div className="NavBar_className__y2qGg" style={{
      position: "fixed",
      paddingRight: "initial"
    }}>
      <div className="MainBar_MainBar__40DX7">
        <nav className="MainBar_MainBar_nav__kwHBF">
          <NavTop></NavTop>
          <NavMenu></NavMenu>
          <NavAside></NavAside>
        </nav>
      </div>
    </div>
  );
}

function ToggleMenu () {
  return (
    <div className="ToggleMenu">
      <h1>dfasdfdas</h1>
    </div>
  )
} 

export default Nav;