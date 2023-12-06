import React from "react"
import { Link } from "react-router-dom"

import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"

import "./Home.scss"

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="h-75 container px-lg-5">
        Content
      </main>

      <Footer />
    </>
  )
}
