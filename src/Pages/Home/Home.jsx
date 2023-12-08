import React from "react"
import { Link } from "react-router-dom"

import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"

import "./Home.scss"
import { useTranslation } from "react-i18next"

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      
      <main className="px-xxl-5">
        {t("content")}
      </main>

      {/* <Footer /> */}
    </>
  )
}
