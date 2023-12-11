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

export default function Home() {

  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <div className="container pt-5 px-xxl-5 mb-5">
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
        </div>
        <div className="bg-light mt-5">

          <div className="mx-auto py-5">
          <h2 className="text-center mb-5 fs-1">Explore</h2>

          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  )
}
