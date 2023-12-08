import React from 'react'

import carousel_img_1 from "/img/carusel_img_1c.png"
import carousel_img_2 from "/img/carusel_img_2c.png"
import carousel_img_3 from "/img/carusel_img_3c.png"
import "./Carousel.scss"

export default function Carousel() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide home_carousel" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner home_carousel_inner">
          <div className="carousel-item home_carousel_inner_item active">
            <img src={carousel_img_1} className="d-block w-100 home_carousel_inner_item_img " alt="imagination" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item home_carousel_inner_item">
            <img src={carousel_img_2} className="d-block w-100 home_carousel_inner_item_img" alt="img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item home_carousel_inner_item">
            <img src={carousel_img_3} className="d-block w-100 home_carousel_inner_item_img" alt="img" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>




    </>
  )
}
