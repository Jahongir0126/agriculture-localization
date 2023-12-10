import React from 'react'

import card_img1 from '/img/card_img1.webp'
import card_img2 from '/img/card_img2.webp'
import card_img3 from '/img/card_img3.webp'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Card_Groups() {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card h-100 rounded-0 border-0">
                        <img src={card_img1} className="card-img-top rounded-0" alt="..." />
                        <div className="card-body card_bg p-4">
                            <Link className='page-link' to={"/"}>
                                <h5 className="card-title">{t("card.card2_title")}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 border-0">
                        <img src={card_img2} className="card-img-top rounded-0" alt="..." />
                        <div className="card-body card_bg p-4">
                            <Link className='page-link' to={"/"}>
                                <h5 className="card-title mt-3">{t("card.card3_title")}</h5>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 border-0">
                        <img src={card_img3} className="card-img-top rounded-0" alt="..." />
                        <div className="card-body card_bg p-4">
                            <Link className='page-link' to={"/"}>
                                <h5 className="card-title mt-4">{t("card.card4_title")}</h5>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
