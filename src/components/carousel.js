import React, { useRef } from "react";
import "../css/carousel.css";

function Carousel () {
  const carousel = useRef();
  let cellCount = 9;
  let selectedIndex = 0;

  let cellSize = 1060;
  let numberOfCells = 9;
  let tz = Math.round( ( cellSize / 2 ) /  Math.tan( Math.PI / numberOfCells ) );
  console.log(tz);

  function rotateCarousel() {
    let angle = selectedIndex / cellCount * -360;
    carousel.current.style.transform = `translateZ(-1456px) rotateY(${angle}deg)`;
    console.log(carousel.current.style.transform);
  }

  function previousMove() {
    selectedIndex--;
    rotateCarousel();
  }

  function nextMove() {
    selectedIndex++;
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