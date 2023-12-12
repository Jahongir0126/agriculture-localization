import { Link } from 'react-router-dom'

import logo from "/img/footer_logo.svg"
import youtube from "/img/icon-youtube.webp"
import twitter from "/img/icon-twitter.webp"
import facebook from "/img/icon-facebook.webp"
import './Footer.scss'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <footer className=' py-4 text-white'>

        <div className="container px-xxl-5">
          <div className='d-md-flex  footer_top mt-5  align-items-baseline'><Link to="/" className="navbar-brand navbar_brand fw-light "><img src={logo} alt="footer_logo" className='my-3' /></Link>
            <ul className='list-unstyled d-flex align-items-center flex-wrap links_list ms-sm-0 ms-md-4'>
              <li><Link to={"https://ag.dji.com/about-us?site=ag&from=footer"} target='_blank' className='nav-link '>{t("footer.footer_top_link1")}</Link></li>
              <li><Link to={"https://ag.dji.com/contact-us?site=ag&from=footer"} target='_blank' className='nav-link ms-4'>{t("footer.footer_top_link2")}</Link></li>
              <li><Link to={"https://we.dji.com/index_en.html?site=ag&from=footer"} target='_blank' className='nav-link ms-4'>{t("footer.footer_top_link3")}</Link></li>
              <li><Link to={"https://prm.dji.com/?site=ag&from=footer"} target='_blank' className='nav-link ms-4'>{t("footer.footer_top_link4")}</Link></li>
              <li><Link to={"https://www.robomaster.com/?site=ag&from=footer"} target='_blank' className='nav-link ms-4'>{t("footer.footer_top_link5")}</Link></li>
            </ul>
            <ul className="list-unstyled d-flex ms-auto icons_list ">
              <li><Link to={"https://facebook.com"} target='_blank' className="nav-link" href="#"><img src={facebook} alt="icon " /></Link></li>
              <li className="ms-3"><Link to={"https://twitter.com"} target='_blank' className="nav-link" href="#"><img src={twitter} alt="icon" /></Link></li>
              <li className="ms-3"><Link to={"https://youtube.com"} target='_blank' className="nav-link" href="#"><img src={youtube} alt="icon" /></Link></li>
            </ul>
          </div>
          <div className="flex-sm-row justify-content-between mt-3 footer_bottom">
            <ul className='list-unstyled d-sm-flex'>
              <li><Link to={"https://www.dji.com/policy?site=ag&from=footer"} target='_blank' className='nav-link ms-3'>{t("footer.footer_bottom_link1")}</Link></li>
              <li><Link to={"https://www.dji.com/policy?site=ag&from=footer#cookie"} target='_blank' className='nav-link ms-3'>{t("footer.footer_bottom_link2")}</Link></li>
              <li><Link to={"https://www.dji.com/terms?site=ag&from=footer"} target='_blank' className='nav-link ms-3'>{t("footer.footer_bottom_link3")}</Link></li>
              <li><Link to={"https://www.dji.com/sitemap?site=ag&from=footer"} target='_blank' className='nav-link ms-3'>{t("footer.footer_bottom_link4")}</Link></li>
              <li><Link to={"https://www.dji.com/policy?site=ag&from=footer#7"} target='_blank' className='nav-link ms-3'>{t("footer.footer_bottom_link5")}</Link></li>
              <li><Link to={"https://ag.dji.com/"} target='_blank' className='nav-link ms-3'>{t("footer.footer_bottom_link6")}</Link></li>
            </ul>
            <div className='d-md-flex ms-3'>
              <p>{t("footer.footer_bottom_link7")}</p>
              <Link className='nav-link ms-md-4' to={"https://www.dji.com/feedback"} target='_blank'>{t("footer.footer_bottom_link8")}</Link>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}
