import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import card_img1 from '/img/explore_card_img1.webp'
import card_img2 from '/img/explore_card_img2.webp'
import card_img3 from '/img/explore_card_img3.webp'

export default function Explore_Card_Group() {
  const { t, i18n } = useTranslation();

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3  mb-5">
      <div className="col mt-3 p-2">
        <div className="card  text-bg-dark rounded-0 border-0 text-center ">
          <img src={card_img1} className="card-img rounded-0" alt="card_img" />
          <div className="card-img-overlay d-flex align-items-end p-5">
            <Link className='page-link ' to={"/"}>
              <h5 className="card-title fs-2">{t("home.explore_card1_title")}</h5>
              <p className='card_text explore_text'>{t("home.explore_card1_text")}</p>
              <a href="https://ag.dji.com/newsroom" className='nav-link explore_btn'>{t("home.btn_more_details")}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col mt-3 p-2">
        <div className="card  text-bg-dark rounded-0 border-0 text-center">
          <img src={card_img2} className="card-img rounded-0" alt="card_img" />
          <div className="card-img-overlay d-flex align-items-end p-5">
            <Link className='page-link ' to={"/"}>
              <h5 className="card-title fs-2">{t("home.explore_card2_title")}</h5>
              <p className='card_text explore_text'>{t("home.explore_card2_text")}</p>
              <a href="https://ag.dji.com/case-studies" className='nav-link explore_btn'>{t("home.btn_more_details")}</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="col mt-3 p-2">
        <div className="card  text-bg-dark rounded-0 border-0 text-center">
          <img src={card_img3} className="card-img rounded-0" alt="card_img" />
          <div className="card-img-overlay d-flex align-items-end p-5">
            <Link className='page-link ' to={"/"} >
              <h5 className="card-title fs-2">{t("home.explore_card3_title")}</h5>
              <p className='card_text explore_text'>{t("home.explore_card3_text")}</p>
              <a href="https://ag.dji.com/newsroom" className='nav-link explore_btn'>{t("home.btn_more_details")}</a>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}
