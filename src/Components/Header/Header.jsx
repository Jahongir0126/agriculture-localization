import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Header.scss";

import logo from "/img/logo.webp";
import drone1 from "/img/navbar_dron_photo_1.webp";
import drone2 from "/img/navbar_dron_photo_2.webp";
import mobile_phone from "/img/navbar_mobile_phone.webp";

export default function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <header className="bg-white">
        <div className="container px-xxl-5 ">
          <nav className="navbar navbar-expand-lg ">
            <Link to="/" className="navbar-brand ">
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 hamburger_menu">
                <li className="nav-item fw-medium ms-3  my_dropdown ">
                  <Link
                    className="nav-link link-dark link-opacity-75-hover"
                  >{t("navbar.product")}
                  </Link>
                  <div>
                    <ul className="row p-0">
                      <li className="dropdown-item  d-flex justify-content-between">
                        <img src={drone1} alt="drone photo" className="navbar_img" />
                        <div>
                          <h5>{t("navbar.menu_title1")}</h5>
                          <span className="">{t("navbar.menu_text1")}</span>
                          <Link to={"https://www.dji.com/t20p?site=ag&from=nav"} target="_blank" className="nav-link navbar_p mt-3">AGRAS T20P</Link>
                          <Link to={"https://www.dji.com/t40?site=ag&from=nav"} target="_blank" className="nav-link navbar_p">AGRAS T40</Link>
                          <Link to={"https://www.dji.com/t30?site=ag&from=nav"} target="_blank" className="nav-link navbar_p">AGRAS T30</Link>
                          <Link to={"https://www.dji.com/t10?site=ag&from=nav"} target="_blank" className="nav-link navbar_p">AGRAS T10</Link>
                        </div>
                      </li>
                      <li className="dropdown-item  d-flex">
                        <img src={drone2} alt="drone photo" className="navbar_img" />
                        <div>
                          <h5>{t("navbar.menu_title2")}</h5>
                          <span>{t("navbar.menu_text2")}</span>
                          <Link to={"https://ag.dji.com/mavic-3-m?site=ag&from=nav"} target="_blank" className="nav-link navbar_p mt-3">Mavic 3M</Link>
                          <Link to={"https://www.dji.com/dji-terra?site=ag&from=nav"} target="_blank" className="nav-link navbar_p">DJI Terra</Link>
                        </div>
                      </li>
                      <li className="dropdown-item  d-flex border-0">
                        <img src={mobile_phone} alt="drone photo" className="navbar_img" />

                        <div>
                          <h5>{t("navbar.menu_title3")}</h5>
                          <span>{t("navbar.menu_text3")}</span>
                          <Link to={"https://ag.dji.com/smartfarm-web?site=ag&from=nav"} target="_blank" className="nav-link navbar_p mt-3">DJI SmartFarm Web</Link>
                          <Link to={"https://www.dji.com/ag-platform?site=ag&from=nav"} target="_blank" className="nav-link navbar_p">DJI SmartFarm App</Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="nav-item fw-medium ms-3 ">
                  <Link to={"https://ag.dji.com/newsroom?site=ag&from=nav"} target="_blank"
                    className="nav-link link-dark link-opacity-75-hover"
                  >{t("navbar.newsroom")}
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3 ">
                  <Link to={"https://ag.dji.com/case-studies?site=ag&from=nav"} target="_blank"
                    className="nav-link link-dark link-opacity-75-hover"
                  >{t("navbar.inform")}
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3 ">
                  <Link to={"https://www.uastc.com/us/?site=ag&from=nav"} target="_blank"
                    className="nav-link link-dark link-opacity-75-hover"
                  >{t("navbar.academy")}
                  </Link>
                </li>
                <li className="nav-item fw-medium ms-3  dropdown support_dropdown">
                  <Link className="nav-link link-dark link-opacity-75-hover"
                  >{t("navbar.support")}
                  </Link>
                  <ul className="dropdown-menu p-0">
                    <li>
                      <Link to={"https://www.dji.com/support?site=ag&from=nav"} target="_blank" className="nav-link dropdown-item">After-Sales Service Policies</Link>
                    </li>
                    <li>
                      <Link to={"https://www.dji.com/where-to-buy/agriculture-dealers?site=ag&from=nav"} target="_blank" className="nav-link dropdown-item">Find Dealers Nearby</Link>
                    </li>
                    <li>
                      <Link to={"https://www.dji.com/flysafe?site=ag&from=nav"} target="_blank" className="nav-link dropdown-item">Fly Safe</Link>
                    </li>
                    <li>
                      <Link to={"https://www.dji.com/downloads?site=ag&from=nav"} target="_blank" className="nav-link dropdown-item">Download Center </Link>
                    </li>
                    <li>
                      <Link to={"https://www.dji.com/service/repair/centers?site=ag&from=nav"} target="_blank" className="nav-link dropdown-item">Service Center </Link>
                    </li>
                  </ul>



                </li>
                <li className="nav-item fw-medium ms-3 ">
                  <Link to={"https://ag.dji.com/about-us?site=ag&from=nav"} target="_blank"
                    className="nav-link link-dark link-opacity-75-hover"
                  >{t("navbar.about")}
                  </Link>
                </li>

              </ul>
              <a
                href="https://ag.dji.com/contact-us"
                target="_blank"
                className="btn btn-secondary border-0  rounded-1 contact_btn "

              >{t("navbar.contact")}
              </a>

            </div>
            <div className="lang ms-3">
              <select className="form-select text-lowercase" onChange={(e) => changeLanguage(e.target.value)}>
                <option disabled selected  className=" bg-secondary bg-opacity-50">{i18n.language}
                </option>
                <option value="en">EN
                </option>
                <option value="ru">RU
                </option>
                <option value="uz">UZ
                </option>
              </select>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
