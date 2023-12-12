import React from "react"
import { useTranslation } from "react-i18next"

import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import Card from "../../Components/Cards/Card"
import Card_Groups from "../../Components/Cards/Card_Group"
import Footer from "../../Components/Footer/Footer"
import "./Home.scss"

import big_card_img1 from '/img/big_card_img1.webp'
import big_card_img2 from '/img/big_card_img2.webp'
import big_card_img3 from '/img/big_card_img3.webp'
import support_buy from '/img/support_buy_img.svg'
import support_dealer from '/img/support_dealer.svg'
import support_service from '/img/support_service.svg'

export default function Home() {

  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      {/* <main>
        <Carousel />
        <section className="container pt-5 px-xxl-5 pb-5">
          <h1 className="visually-hidden">DJI Agriculture - Drones Better Growth, Better Life</h1>
          <div>
            <h2 className="text-center mb-4 fs-1">{t("home.better")}</h2>
            <span className="green_rectangle"></span>
            <Card className="card1" title={t("card.card1_title")} link={'/'} text={t("card.card1_text")} img_url={big_card_img1} />
            <Card_Groups />
          </div>
          <div className="mt-5 pt-5">
            <h2 className="text-center mb-4 fs-1">{t("home.solution")}</h2>
            <span className="green_rectangle mb-3"></span>
            <p className="solution_text">{t("home.solution_text")}</p>
            <Card title={t("card.card5_title")} link={'/'} text={t("card.card5_text")} img_url={big_card_img2} />
            <Card title={t("card.card6_title")} link={'/'} text={t("card.card6_text")} img_url={big_card_img3} />
          </div>
        </section>
        <section className="bg-light mt-5">
          <div className="mx-auto py-5 container px-5">
            <h2 className="text-center mb-5 fs-1">Explore</h2>
            <Card_Groups />
          </div>
        </section>

        <section className="container pt-5 px-xxl-5 mb-5">
          <h2 className="text-center my-5 fs-1">Support</h2>
          <ul className="row list-unstyled text-center mx-auto mb-5 pb-5">
            <li className="col-md-6 col-lg-4 support_item my-4">
              <img src={support_buy} alt="cuy_icon" />
              <h3 className="fs-4 my-3">Where to Buy </h3>
              <a href="https://www.dji.com/where-to-buy/agriculture-dealers" className="nav-link">Find a reliable dealer nearby.</a>
            </li>
            <li className="col-md-6 col-lg-4  support_item my-4">
              <img src={support_dealer} alt="dealer_icon" />
              <h3 className="fs-4 my-3">Become a Dealer </h3>
              <a href="https://prm.dji.com/" className="nav-link">Read our terms and conditions.</a>
            </li>
            <li className="col-md-6 col-lg-4  support_item my-4">
              <img src={support_service} alt="service" />
              <h3 className="fs-4 my-3">After-Sales Service Policies </h3>
              <a href="https://www.dji.com/support" className="nav-link">Learn about after-sales services and technical support.</a>
            </li>
          </ul>
        </section>


        <section className="bg-light mt-5 py-5">
          <div className="container mx-auto py-5  px-5  text-center">
            <h2 className=" mb-4 fs-1">Contact Us</h2>
            <span className="green_rectangle mb-3"></span>
            <p className="solution_text mb-4">If you wish to purchase products or become a dealer, please leave your contact information below. We will be in contact with you shortly.</p>
            <a href="https://ag.dji.com/contact-us" className="btn btn-secondary rounded-5 m-auto px-5 contact_us_btn">Contact Us</a>
          </div>
        </section>
      </main> */}
      <Footer />
    </>
  )
}
