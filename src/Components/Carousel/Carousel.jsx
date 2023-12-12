import React from 'react'

import carousel_img_1 from "/img/carusel_img_1c.webp"
import carousel_img_2 from "/img/carusel_img_2c.webp"
import carousel_img_3 from "/img/carusel_img_3c.webp"

import "./Carousel.scss"
import { useTranslation } from 'react-i18next'

export default function Carousel() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide home_carousel mb-5" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner home_carousel_inner">
          <div className="carousel-item home_carousel_inner_item active carousel_item1">
            <img 
            src={carousel_img_1} 
            className="d-block w-100 home_carousel_inner_item_img carousel_img1" alt="imagination" />
            <div className="carousel-caption">
              <h5>Agras T40</h5>
              <p>{t("carousel.carousel1_text")}</p>
              <a href="#" className="btn text-white btn-outline-light rounded-5">{t("carousel.btn_learn_more")}</a>
            </div>
          </div>
          <div className="carousel-item home_carousel_inner_item carousel_item2">
            <img 
            src={carousel_img_2}
             className="d-block w-100 home_carousel_inner_item_img" alt="img" />
            <div className="carousel-caption">
              <h5>DJI Mavic 3M</h5>
              <p>{t("carousel.carousel2_text")}</p>
              <a href="#" className="btn text-white btn-outline-light rounded-5">{t("carousel.btn_learn_more")}</a>
            </div>
          </div>
          <div className="carousel-item home_carousel_inner_item carousel_item3">
            <img 
            src={carousel_img_3}
             className="d-block w-100 home_carousel_inner_item_img" alt="img" />
            <div className="carousel-caption">
              <h5>DJi Smartfarm Web</h5>
              <a href="#" className="btn text-white btn-outline-light rounded-5">{t("carousel.btn_learn_more")}</a>
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
