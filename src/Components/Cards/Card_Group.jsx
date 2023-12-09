import React from 'react'

import card_img1 from '/img/card_img1.png'
import card_img2 from '/img/card_img2.png'
import card_img3 from '/img/card_img3.png'

export default function Card_Groups() {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 rounded-0 border-0">
                        <img src={card_img1} className="card-img-top rounded-0" alt="..." />
                        <div className="card-body card_bg ">
                            <h5 className="card-title">New DJI Agriculture Drone Insight Report Reveals Greater Acceptance, Advanced Farming Techniques and Exploration of Best Practices for Farmers</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 border-0">
                        <img src={card_img2} className="card-img-top rounded-0" alt="..." />
                        <div className="card-body card_bg ">
                            <h5 className="card-title mt-3">What does agricultural drone spraying of 66.7 million hectares mean to the planet?</h5>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 rounded-0 border-0">
                        <img src={card_img3} className="card-img-top rounded-0" alt="..." />
                        <div className="card-body card_bg ">
                            <h5 className="card-title mt-4">Agricultural Drone Industry Insight Report (2021)</h5>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
