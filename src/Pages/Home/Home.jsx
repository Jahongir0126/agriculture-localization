import React from "react"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
// import Card from "../../Components/Card/Card"

import "./Home.scss"

export default function Home() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Header />
      
      <main className="px-xxl-5">
        {t("navbar.product")}

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum fuga autem reiciendis! Nisi, perferendis aspernatur totam consectetur optio iste iusto. Incidunt, explicabo. Adipisci cum rerum ipsam quia maiores pariatur aut eius, nihil voluptate totam debitis eveniet ullam molestias minus obcaecati nostrum cupiditate reiciendis excepturi quibusdam sit ipsa voluptates distinctio enim ducimus! Eum odit animi voluptas, facilis consequuntur voluptates hic! Architecto iusto maxime sunt consequatur provident quibusdam doloribus molestias dignissimos inventore minima voluptates nemo fugit excepturi eveniet, enim a sequi iure ipsa officia impedit, esse fuga quam exercitationem dolore. Culpa, doloremque reiciendis eum consectetur quidem repellendus distinctio dolores explicabo adipisci?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum fuga autem reiciendis! Nisi, perferendis aspernatur totam consectetur optio iste iusto. Incidunt, explicabo. Adipisci cum rerum ipsam quia maiores pariatur aut eius, nihil voluptate totam debitis eveniet ullam molestias minus obcaecati nostrum cupiditate reiciendis excepturi quibusdam sit ipsa voluptates distinctio enim ducimus! Eum odit animi voluptas, facilis consequuntur voluptates hic! Architecto iusto maxime sunt consequatur provident quibusdam doloribus molestias dignissimos inventore minima voluptates nemo fugit excepturi eveniet, enim a sequi iure ipsa officia impedit, esse fuga quam exercitationem dolore. Culpa, doloremque reiciendis eum consectetur quidem repellendus distinctio dolores explicabo adipisci?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eum fuga autem reiciendis! Nisi, perferendis aspernatur totam consectetur optio iste iusto. Incidunt, explicabo. Adipisci cum rerum ipsam quia maiores pariatur aut eius, nihil voluptate totam debitis eveniet ullam molestias minus obcaecati nostrum cupiditate reiciendis excepturi quibusdam sit ipsa voluptates distinctio enim ducimus! Eum odit animi voluptas, facilis consequuntur voluptates hic! Architecto iusto maxime sunt consequatur provident quibusdam doloribus molestias dignissimos inventore minima voluptates nemo fugit excepturi eveniet, enim a sequi iure ipsa officia impedit, esse fuga quam exercitationem dolore. Culpa, doloremque reiciendis eum consectetur quidem repellendus distinctio dolores explicabo adipisci?</p>

      </main>

      {/* <Footer /> */}
    </>
  )
}
