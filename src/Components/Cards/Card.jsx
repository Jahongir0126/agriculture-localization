import React from 'react'
import { Link } from 'react-router-dom'

import "./Card.scss"

export default function Card(props) {
    return (
        <>
            <div className={`${props.className} card mb-3  rounded-0 border-0 mt-5 `}>
                <div className="row g-0">
                    <div className="col-lg-6 ">
                        <img src={props.img_url} className="img-fluid" alt="Card" />
                    </div>
                    <div className="col-lg-6 d-flex align-items-center card_bg" >
                        <div className="card-body px-lg-4 px-xl-5 py-4">
                            <Link className='page-link' to={props.link}>
                                <h5 className="card-title mb-3 fs-4">{props.title}</h5>
                            </Link>
                            <p className="card-text text-secondary">{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

