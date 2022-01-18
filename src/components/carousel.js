import React, { useEffect, useRef, useState } from "react";
import "../css/carousel.css";
import { cellsData } from "../components/cellsData.js";

function Carousel () {
  const carousel = useRef();
  const cells = useRef({});

  const [windowSize, setWindowSize] = useState({width: window.innerWidth});
  const [cellSz, setCellSz] = useState(1060);
  const [tz, setTz] = useState(Math.round( ( cellSz / 2 ) /  Math.tan( Math.PI / cellsData.length ) ))

  let cellCount = cellsData.length;
  let selectedIndex = 0;
  let activeIndex = 0;
  let firstHidden = 4;
  let secondHidden = 5;

  let cellSize = 1060;
  let numberOfCells = cellsData.length;
  // let tz = Math.round( ( cellSz / 2 ) /  Math.tan( Math.PI / numberOfCells ) );
  console.log(tz)

  function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.current.style.transform = `translateZ(-1456px) rotateY(${angle}deg)`;
    console.log(carousel.current.style.transform);
  }

  useEffect(() => {
    carousel.current.children[0].classList.add("active");
    carousel.current.children[firstHidden].classList.add("hidden");
    carousel.current.children[secondHidden].classList.add("hidden");
    carousel.current.children[0].children[1].classList.add("infoActive");
    setInterval(() => {
      nextMove()
    }, 3700);
    console.log(window.innerWidth)
    let cellWidth = ((window.innerWidth >= 1200) ? 1060 : (window.innerWidth - 97))
    let tanz = Math.round( ( cellWidth / 2 ) /  Math.tan( Math.PI / numberOfCells ) )
    console.log(tanz)
    // carousel.current.style.transform = `translateZ(${tanz}px)`;
    console.log(carousel.current.style.transform)
    cellsData.map((data, i) => {
      cells.current[i].style.transform = `rotateY(${i * 40}deg) translateZ(${tanz}px)`
    })
  }, [])

  function previousMove() {
    selectedIndex--;

    carousel.current.children[activeIndex].classList.remove("active");
    carousel.current.children[activeIndex].children[1].classList.remove("infoActive");

    activeIndex === 0 ? activeIndex = 8 : activeIndex --
    hiddenActive(activeIndex);
    carousel.current.children[activeIndex].classList.add("active");
    carousel.current.children[activeIndex].children[1].classList.add("infoActive");

    rotateCarousel();
  }

  function nextMove() {
    selectedIndex++;
    carousel.current.children[activeIndex].classList.remove("active");
    carousel.current.children[activeIndex].children[1].classList.remove("infoActive");
    activeIndex === 8 ? activeIndex = 0 : activeIndex++
    hiddenActive(activeIndex);
    carousel.current.children[activeIndex].classList.add("active");
    carousel.current.children[activeIndex].children[1].classList.add("infoActive");

    rotateCarousel();
  }

  function hiddenActive(active) {
    carousel.current.children[firstHidden].classList.remove("hidden");
    carousel.current.children[secondHidden].classList.remove("hidden");

    if (active === 4) {
      firstHidden = active + 4;
      secondHidden = 0;
    } else if (active > 4) {
      firstHidden = active - 5;
      secondHidden = firstHidden + 1;
    } else {
      firstHidden = active + 4;
      secondHidden = firstHidden + 1;
    }

    console.log(firstHidden, secondHidden)
    carousel.current.children[firstHidden].classList.add("hidden");
    carousel.current.children[secondHidden].classList.add("hidden");
  }

  // window resize
  // const [windowSize, setWindowSize] = useState({width: window.innerWidth});
  // const [cellSz, setCellSz] = useState(1060);

  function handleResize() {
    // console.log(window.innerWidth - 97);
    setWindowSize({width: window.innerWidth});
    setCellSz(((window.innerWidth >= 1200) ? 1060 : (window.innerWidth - 97)));
    
    let cellWidth = ((window.innerWidth >= 1200) ? 1060 : (window.innerWidth - 97))
    setTz(Math.round( ( cellWidth / 2 ) /  Math.tan( Math.PI / numberOfCells ) ));
    let tanz = Math.round( ( cellWidth / 2 ) /  Math.tan( Math.PI / numberOfCells ) )

    //useEffect에서도 taz값 반복
    cellsData.map((data, i) => {
      cells.current[i].style.transform = `rotateY(${i * 40}deg) translateZ(${tanz}px)`
      // console.log(cells.current[i].style.transform);
    })
    console.log(tanz);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  return(
    <div className="Carousel">
      <div className="scene" style={{width: (windowSize.width >= 1200) ? "1060px" : `${(windowSize.width - 97)}px`}}>
        <div className="carousel" ref={carousel}>
          {cellsData.map((cell, index) => {
            return(
              <div className="carousel__cell" style={{width: (windowSize.width >= 1200) ? "1040px" : `${(windowSize.width - 117)}px`}} ref={ref => (cells.current[index] = ref)}>
                <img src={cell.img} alt="img"></img>
                <div className="carouselInfo">
                  <h2>{cell.title}</h2>
                  <h3>{cell.content}</h3>
                  <hr></hr>
                  <a><span>바로가기
                    <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon">
                      <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </span></span>
                  </span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* <p style={{textAlign : "center", marginTop : "150px"}}>
        <button className="previous-button" onClick={previousMove}>Previous</button>
        <button className="next-button" onClick={nextMove}>Next</button>
      </p> */}
      <button className="rightBtn" onClick={nextMove}>
        <span className="SvgIcon_SvgIcon__root__8vwon">
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
      <button className="leftBtn" onClick={previousMove}>
        <span className="SvgIcon_SvgIcon__root__8vwon">
          <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </span>
      </button>
      {/* <p>{cellSz}</p>
      <p>tz:{tz}</p> */}
    </div>
    )
}

export default Carousel;