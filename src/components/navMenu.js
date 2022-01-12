import React from "react";
import "../css/navMenu.css"

export default function NavMenu() {
  return(
    <>
      <ul className="NavMenu">
        <li className="HomeButton">
          <a>홈</a>
        </li>
        <li>
          <a>채용</a>
        </li>
        <li>
          <a>이벤트</a>
        </li>
        <li>
          <a>직군별 연봉</a>
        </li>
        <li>
          <a>이력서</a>
        </li>
        <li>
          <a>커뮤니티
            <em>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g>
                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                    <tspan x="0" y="8">New</tspan>
                  </text></g></g></g></g></g></g></g>
                </g>
              </svg>
            </em>
          </a>
        </li>
        <li>
          <a>프리랜서</a>
        </li>
        <li>
          <a>AI 합격예측
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
              <g fill="none" fill-rule="evenodd" font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo" font-size="9" font-weight="500"><g fill="#36F"><g><g><g><g><g><g>
                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                  <tspan x="0" y="8">Beta</tspan>
                </text></g></g></g></g></g></g></g>
              </g>
            </svg>
          </span>
          </a>
        </li>
      </ul>
    </>
  )
}