import React, { useEffect, useRef } from "react";
import "../css/carousel.css";

function Carousel () {
  const carousel = useRef();
  let cellCount = 9;
  let selectedIndex = 0;
  let activeIndex = 0;

  let cellSize = 1060;
  let numberOfCells = 9;
  let tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );
  console.log(tz);

  function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.current.style.transform = `translateZ(-1456px) rotateY(${angle}deg)`;
    console.log(carousel.current.style.transform);
  }

  useEffect(() => {
    carousel.current.children[0].classList.add("active");
  }, [])

  function previousMove() {
    selectedIndex--;
    console.log(selectedIndex + 9);
    (activeIndex === 0) 
    ? ( carousel.current.children[activeIndex].classList.remove("active") ) 
    : ( carousel.current.children[(9 + activeIndex)].classList.remove("active") )

    activeIndex === -8 ? activeIndex = 0 : activeIndex--
    console.log(9 + activeIndex);
    console.log(carousel.current.children[0]);
    (activeIndex === 0) 
    ? ( carousel.current.children[activeIndex].classList.add("active") ) 
    : ( carousel.current.children[(9 + activeIndex)].classList.add("active") )
    rotateCarousel();
  }

  function nextMove() {
    selectedIndex++;
    carousel.current.children[activeIndex].classList.remove("active");
    activeIndex === 8 ? activeIndex = 0 : activeIndex++ 
    console.log(activeIndex)
    carousel.current.children[activeIndex].classList.add("active");

    rotateCarousel();
  }
  return(
    <div className="Carousel">
      <div className="scene">
        <div className="carousel" ref={carousel}>
          <div className="carousel__cell">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">8</div>
          <div className="carousel__cell">9</div>
        </div>
      </div>
      <p style={{textAlign : "center"}}>
        <button className="previous-button" onClick={previousMove}>Previous</button>
        <button className="next-button" onClick={nextMove}>Next</button>
      </p>
    </div>
    )
}

export default Carousel;