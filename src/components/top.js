import React from "react";
import "../css/top.css";
import carousel01 from "../images/carousel_01.jpg";
import carousel02 from "../images/carousel_02.jpg";
import carousel03 from "../images/carousel_03.jpg";
import carousel04 from "../images/carousel_04.jpg";
import carousel05 from "../images/carousel_05.jpg";
import carousel06 from "../images/carousel_06.jpg";
import carousel07 from "../images/carousel_07.jpg";
import carousel08 from "../images/carousel_08.jpg";
import carousel09 from "../images/carousel_09.jpg";
import carousel10 from "../images/carousel_10.jpg";

function Top () {
  return (
    <div className="Top">
      <button></button>
      <button></button>
      <div className="slick_list">
        <div className="slick_track">
          <div className="slick-slide slick-cloned">
            <img src={carousel01}></img>
          </div>
          <div className="slick-slide slick-cloned">
            <img src={carousel02}></img>
          </div>
          <div className="slick-slide slick-cloned">
            <img src={carousel03}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top;