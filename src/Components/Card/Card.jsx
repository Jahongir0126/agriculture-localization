import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import "./Card.scss"

export default function Card(props) {
    return (
        <>
            <div className={props.className}>
                <div className="card border-0 my_card">
                    <span>
                        <FontAwesomeIcon icon={faHeart} className="text-light" />
                    </span>
                    <img src={props.img} title={props.title} className="card-img-top rounded-0" alt="card_img" />
                    <Link to={`/product/${props.link}`} className='nav-link '>
                        <div className="card-body ps-0">
                            <p className="card_text mb-1">{props.title}</p>
                            <p className="card_text">{props.price} руб.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
