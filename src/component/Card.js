import React from 'react'
import './Card.css'
import nancym from "../Image/nancym.jpg"
import { FaStar, FaRegStar } from "react-icons/fa";

function Card() {
    return (
        <div className="card">
            <div className="poster"><img src={nancym} alt="pic" /> </div>
            <div className="details">
                <h2>Beauty and the Beast<br />
                    <span>Directed By Bili </span>
                </h2>
                <div className="rating">
                    <FaStar color="#f7f406" margin-right="2px" fontSize="16px" />
                    <FaStar color="#f7f406" margin-right="2px" fontSize="16px" />
                    <FaStar color="#f7f406" margin-right="2px" fontSize="16px" />
                    <FaStar color="#f7f406" margin-right="2px" fontSize="16px" />
                    <FaRegStar color="#f7f406" margin-right="2px" fontSize="16px" />
                    <span className="rate" >4/5</span>
                </div>
                <span className="fantasy">Fantasy</span>
                <span className="romance">Romance</span>

                <div className="info">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...</p>
                </div>
                <div className="star">
                    <h4>Cast</h4>
                    <ul>
                        <li><img src={nancym} alt="dcjnsj" /></li>
                        <li><img src={nancym} alt="dcjnsj" /></li>
                        <li><img src={nancym} alt="dcjnsj" /></li>
                        <li><img src={nancym} alt="dcjnsj" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
// FaRegStar
// FaStarHalfAlt
// FaStar