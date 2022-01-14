import React, { useEffect, useRef, useState } from "react";
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
  const slides = [
    {image : carousel01},
    {image : carousel02},
    {image : carousel03},
    {image : carousel04},
    {image : carousel05},
    {image : carousel06},
    {image : carousel07},
    {image : carousel08},
    {image : carousel09},
    {image : carousel10},
  ]
  
  const datas = [
    {
      id: 0,
      src: "https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg",
      info_top: "Git? Github?",
      info_bottom: "협업 필수 도구 마스터하기",
    },
    {
      id: 1,
      src: "https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg",
      info_top: "마케터를 위한 데이터",
      info_bottom: "잘 나가는 마케터는 무엇이 다를까!?",
    },
    {
      id: 2,
      src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
      info_top: "나도 개발자 되고 싶다",
      info_bottom: "프론트엔드 무료 교육과정 참여하기",
    },
    {
      id: 3,
      src: "https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg",
      info_top: "유저 경험을 설계하라!",
      info_bottom: "문제를 해결하는 프로덕트 디자인",
    },
    {
      id: 4,
      src: "https://static.wanted.co.kr/images/banners/1454/e504b006.jpg",
      info_top: "아는 만큼 보인다!",
      info_bottom: "노동법 '채용' 시리즈",
    },
    {
      id: 5,
      src: "https://static.wanted.co.kr/images/banners/1453/7a978579.jpg",
      info_top: "리크루터 커리어 가이드",
      info_bottom: "싼마이 리크루터가 되지 않기 위해",
    },
  
    {
      id: 6,
      src: "https://static.wanted.co.kr/images/banners/1434/fdbbcb06.jpg",
      info_top: "요즘 MD가 일하는 방법",
      info_bottom: "실무자가 공개하는 MD 커리어의 모든 것!",
    },
  
    {
      id: 7,
      src: "https://static.wanted.co.kr/images/banners/1438/015566ac.jpg",
      info_top: "스타벅스 굿즈 좋아하세요?",
      info_bottom: "사랑받는 디자인의 비밀",
    },
    {
      id: 8,
      src: "https://static.wanted.co.kr/images/banners/1460/619f3af7.jpg",
      info_top: "개발자 성장 비결 공개!",
      info_bottom: "글 쓰는 개발자들의 이야기",
    },
    {
      id: 9,
      src: "https://static.wanted.co.kr/images/banners/1468/3df61cbc.jpg",
      info_top: "해, 커리어 EP 02 공개",
      info_bottom: "최종 발표를 위한 마지막 관문 2라운드의 승자는?",
    },
    {
      id: 10,
      src: "https://static.wanted.co.kr/images/banners/1451/725c6862.jpg",
      info_top: "믿을 것은 데이터 뿐!",
      info_bottom: "요즘 데이터팀은 어떻게 일할까?",
    },
    {
      id: 11,
      src: "https://static.wanted.co.kr/images/banners/1452/be4ec643.jpg",
      info_top: "Git? Github?",
      info_bottom: "협업 필수 도구 마스터하기",
    },
    {
      id: 12,
      src: "https://static.wanted.co.kr/images/banners/1436/e2dd9445.jpg",
      info_top: "마케터를 위한 데이터",
      info_bottom: "잘 나가는 마케터는 무엇이 다를까!?",
    },
    {
      id: 13,
      src: "https://static.wanted.co.kr/images/banners/1473/41f7b36e.jpg",
      info_top: "나도 개발자 되고 싶다",
      info_bottom: "프론트엔드 무료 교육과정 참여하기",
    },
    {
      id: 14,
      src: "https://static.wanted.co.kr/images/banners/1435/6cdcea85.jpg",
      info_top: "유저 경험을 설계하라!",
      info_bottom: "문제를 해결하는 프로덕트 디자인",
    },
  ];

  // const [curSlide, setCurSlide] = useState();
  const slideList = useRef();
  const slideContents = useRef({});

  const slideLen = datas.length;
  const slideWidth = 1060;
  const slideSpeed = 300;
  const startNum = 0;

  let curIndex = startNum;
  let curSlide;
  let screensize = ((window.innerWidth - 1060) / 2);

  useEffect(() => {
    slideList.current.style.width = slideWidth * (slideLen + 2) + "px";
    setInterval(() => {
      slideNext()
    }, 3000);
    let firstChild = slideList.current.firstElementChild;
    let lastChild = slideList.current.lastElementChild;
    let clonedFirst = firstChild.cloneNode(true);
    let clonedLast = lastChild.cloneNode(true);
    slideList.current.appendChild(clonedFirst);
    slideList.current.insertBefore(clonedLast, slideList.current.firstElementChild);
    slideList.current.style.transform = "translate3d(-" + ((slideWidth * (startNum + 1)) - screensize) + "px, 0px, 0px)";
    console.log(screensize)
    curSlide = slideContents.current[curIndex];
    curSlide.classList.add("slide_active");
  }, [])
  
  function slideNext() {
    if (curIndex <= slideLen - 1) {
      slideList.current.style.transition = slideSpeed + "ms";
      slideList.current.style.transform = "translate3d(-" + ((slideWidth * (curIndex + 2)) - screensize) + "px, 0px, 0px)";
    } 
    if (curIndex === slideLen - 1) {
      setTimeout(() => {
        slideList.current.style.transition = "0ms";
        slideList.current.style.transform = "translate3d(-" + (slideWidth) + "px, 0px, 0px)";
        console.log(slideSpeed)
      }, slideSpeed);
      curIndex = -1;
    }
    curSlide.classList.remove("slide_active");
    curSlide = slideContents.current[++curIndex];
    curSlide.classList.add("slide_active");
  }

  return (
    <div className="Top">
      <div className="slideWrap">
        <div className="slideBox">
          <div className="slideList" ref={slideList}>
            {
              datas.map((data, i) => {
                return(
                  <div className="slideContent" ref={ref => (slideContents.current[i] = ref)}>
                    <img src={data.src}></img>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <button></button>
      <button onClick={slideNext}>next</button>
    </div>
    
  )
}

export default Top;