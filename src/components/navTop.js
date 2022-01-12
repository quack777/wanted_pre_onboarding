import React from "react";
import "../css/navTop.css"

export default function NavTop() {
  return(
    <div className="MainBar_MainBar_nav_top__wXy52">
      <div className="MainBar_MainBar_nav_top_logo__Y_Q5D">
        <button className="MainBar_hamberger">
          <img src="https://static.wanted.co.kr/images/icon-menu.png" alt="hamberger menu" 
            style={{width: "17px", height: "14px", objectFit: "contain"}}>
          </img>
        </button>
        <a href="/" className="MainBar_MainBar_logo">
          <i id="main-title" className="icon-logo"></i>
        </a>
      </div>
      <button id="gnbSignupBtn" className="xsSignUpButton">회원가입하기</button>
    </div>
  )
}