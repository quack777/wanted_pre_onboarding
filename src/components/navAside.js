import React from "react";
import "../css/NavAside.css"

export default function NavAside() {
  return(
    <>
      <aside className="NavAside">
        <ul>
          <li>
            <button className="searchButton">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                xlink="https://www.w3.org/1999/xlink"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <defs>
                  <path
                    id="qt2dnsql4a"
                    d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <use
                    fill="#333"
                    fillRule="nonzero"
                    stroke="#333"
                    strokeWidth=".3"
                    href="#qt2dnsql4a"
                  ></use>
                </g>
              </svg>
            </button>
          </li>
          <li>
            <button className="signUpButton">회원가입/로그인</button>
          </li>
          <li className="leftDivision">
            <a className="dashboardButton">기업 서비스</a>
          </li>
          <li className="asideVisibleMenu">
            <button className="menuBtn">
              <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path
                    d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                    id="a"
                  ></path>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <mask id="b" fill="#fff">
                    <use href="#a"></use>
                  </mask>
                  <use fill="#333" href="#a"></use>
                  <g mask="url(#b)" fill="#333">
                    <path d="M0 0h18v18H0z"></path>
                  </g>
                </g>
              </svg>
            </button>
          </li>
        </ul>
      </aside>
    </>
  )
}