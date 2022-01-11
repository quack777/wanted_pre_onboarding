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
        <div class="carousel" ref={carousel}>
          <div class="carousel__cell">1</div>
          <div class="carousel__cell">2</div>
          <div class="carousel__cell">3</div>
          <div class="carousel__cell">4</div>
          <div class="carousel__cell">5</div>
          <div class="carousel__cell">6</div>
          <div class="carousel__cell">7</div>
          <div class="carousel__cell">8</div>
          <div class="carousel__cell">9</div>
        </div>
      </div>
      <p style={{textAlign : "center"}}>
        <button class="previous-button" onClick={previousMove}>Previous</button>
        <button class="next-button" onClick={nextMove}>Next</button>
      </p>
    </div>
    )
}

export default Carousel;