import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.scss"
import card_img from '/img/big_card_img1.webp'

export default function Card(props) {
    return (
        <>
            <div className="card mb-3 big_card rounded-0 border-0">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={card_img} className="img-fluid" alt="Card" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center card_bg" >
                        <div className="card-body px-5">
                            <Link className='page-link' to={props.link}>
                                <h5 className="card-title mb-4 fs-4">{props.title}</h5>
                            </Link>
                            <p className="card-text text-secondary pe-4 big_card_title">{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

