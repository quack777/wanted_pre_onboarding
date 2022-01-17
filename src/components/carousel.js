import React, { useEffect, useRef } from "react";
import "../css/carousel.css";
import { cellsData } from "../components/cellsData.js";

function Carousel () {
  const carousel = useRef();
  let cellCount = cellsData.length;
  let selectedIndex = 0;
  let activeIndex = 0;
  let firstHidden = 4;
  let secondHidden = 5;

  let cellSize = 1060;
  let numberOfCells = 9;
  let tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );

  function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.current.style.transform = `translateZ(-1456px) rotateY(${angle}deg)`;
    console.log(carousel.current.style.transform);
  }

  useEffect(() => {
    carousel.current.children[0].classList.add("active");
    carousel.current.children[firstHidden].classList.add("hidden");
    carousel.current.children[secondHidden].classList.add("hidden");
  }, [])

  function previousMove() {
    selectedIndex--;

    carousel.current.children[activeIndex].classList.remove("active");

    activeIndex === 0 ? activeIndex = 8 : activeIndex --
    hiddenActive(activeIndex);
    carousel.current.children[activeIndex].classList.add("active");

    rotateCarousel();
  }

  function nextMove() {
    selectedIndex++;
    carousel.current.children[activeIndex].classList.remove("active");
    activeIndex === 8 ? activeIndex = 0 : activeIndex++
    hiddenActive(activeIndex);
    carousel.current.children[activeIndex].classList.add("active");

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

  return(
    <div className="Carousel">
      <div className="scene">
        <div className="carousel" ref={carousel}>
          {cellsData.map((cell, index) => {
            return(
              <div className="carousel__cell">
                <img src={cell.img}></img>
                <div className="carouselInfo">
                  <h2>{cell.title}</h2>
                  <h3>{cell.content}</h3>
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
    </div>
    )
}

export default Carousel;