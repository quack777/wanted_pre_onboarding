import React, { useState } from "react";
import "../css/nav.css";
import icon_menu from "../images/icon-menu.png";
import { IoIosSearch } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";

function Nav () {
  const [toggleActive, setToggleActive] = useState(false)

  return (
    <div className="Nav">
      <div className="MainBar">
        <section>
          
        </section>
        <div className="navtop">
          <div id="logoSide">
            <button id="gnb">
              <img src={icon_menu} alt="hamberger menu"></img>
            </button>
            <p>wanted</p>
          </div>
          <button id="gnbSignupBtn">회원가입하기</button>
        </div>
        <ul>
          <li>홈</li>
          <li>채용</li>
          <li>이벤트</li>
          <li className="smMoreVisible">직군별 연봉</li>
          <li className="smMoreVisible">이력서</li>
          <li className="smMoreVisible">커뮤니티</li>
          <li className="smMoreVisible">프리랜서</li>
          <li className="smMoreVisible">AI 합격예측</li>
        </ul>
        <aside>
          <ul>
            <li>
              <button>
                <IoIosSearch />
              </button>
            </li>
            <li className="asideHidden">
              <button>회원가입/로그인</button>
            </li>
            <li className="asideHidden">기업서비스</li>
            <li className="visibleMenu">
              <button onClick={() => {
                setToggleActive(true)
              }}>
                <IoEllipsisHorizontal />
              </button>
            </li>
          </ul>
          <div className="MenuPopover"></div>
          {toggleActive ? <ToggleMenu /> : null}
        </aside>
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