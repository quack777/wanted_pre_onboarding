import React, { useState } from "react";
import icon_menu from "../images/icon-menu.png";
import { IoIosSearch } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";

function Nav () {
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <div className="Nav" style={{
      position: "fixed",
      paddingRight: "initial"
    }}>
      <div>
        <nav>
          
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