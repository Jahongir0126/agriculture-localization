import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.scss"
import card_img from '/img/big_card_img1.webp'

export default function Card() {
    return (
        <>
            <div className="card mb-3 big_card rounded-0 border-0">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={card_img} className="img-fluid" alt="Card" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center card_bg" >
                        <div className="card-body px-5">
                            <h5 className="card-title mb-4 fs-4">High-precision Plant Stand Count for Corn, Sunflower and Sugar Beet by a Drone and AI</h5>
                            <p className="card-text text-secondary pe-4 big_card_title">Plant stand count is an essential task in yield management. It allows growers to estimate the plant population, density, germination rate, and plant health and make timely decisions that finally affect the yield.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

