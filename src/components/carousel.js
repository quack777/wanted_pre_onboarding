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
    setTz(Math.round( ( cellSz / 2 ) /  Math.tan( Math.PI / numberOfCells ) ));
    console.log(cellSz);
    
    cellsData.map((data, i) => {
      // console.log(cells.current[i].style.transform);
      cells.current[i].style.transform = `rotateY(${i * 40}deg) translateZ(${tz}px)`
    })
    a();
  }

  function a () {
    console.log(cellSz);
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
                  <a><span>바로가기</span></a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <p style={{textAlign : "center", marginTop : "150px"}}>
        <button className="previous-button" onClick={previousMove}>Previous</button>
        <button className="next-button" onClick={nextMove}>Next</button>
      </p>
      <p>{cellSz}</p>
      <p>tz:{tz}</p>
    </div>
    )
}

export default Carousel;