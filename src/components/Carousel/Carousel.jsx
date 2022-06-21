import React from 'react'
import Shop01 from "../../assets/images/shop01.png"
import Shop02 from "../../assets/images/shop02.png"
import Shop03 from "../../assets/images/shop03.png"
import Shop04 from "../../assets/images/shop04.png"
import "./Carousel.css"

const Carousel = () => {
    return (
        <div className="d-flex justify-content-center carousel-m">
            <div className="slides">
            <img src={Shop01} alt="Shop Img" />
            <img src={Shop02} alt="Shop Img" />
            <img src={Shop03} alt="Shop Img" />
            <img src={Shop04} alt="Shop Img" />
            </div>
        </div>
    )
}

export default Carousel
