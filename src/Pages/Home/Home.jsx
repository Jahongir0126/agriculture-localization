import React from "react"
import { useTranslation } from "react-i18next"

import Header from "../../Components/Header/Header"
import Carousel from "../../Components/Carousel/Carousel"
import Footer from "../../Components/Footer/Footer"

import "./Home.scss"
import Card from "../../Components/Cards/Card"
import Card_Groups from "../../Components/Cards/Card_Group"

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <main className="container pt-5 px-xxl-5">
        <h2 className="text-center mb-4 fs-1">Better Growth, Better Life</h2>
        <span className="green_rectangle"></span>
        <Card />
        <Card_Groups />
      </main>
      {/* <Footer /> */}
    </>
  )
}
