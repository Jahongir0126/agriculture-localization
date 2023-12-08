import React from "react"
import { useTranslation } from "react-i18next"

import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"

import "./Home.scss"

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      <main>
        <Carousel />
        {t("navbar.product")}
      </main>
        {/* <Footer /> */}
    </>
  )
}
