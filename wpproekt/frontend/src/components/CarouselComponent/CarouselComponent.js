import React from "react";
import { Carousel } from "react-responsive-carousel";
import Img1 from '../../assets/images/cc.jpg'
import Img2 from '../../assets/images/ccc.jpg'
import Img3 from '../../assets/images/cc9.png'
import 'bootstrap/dist/css/bootstrap.css';
import './CarouselComponent.css'
import SearchBar from "../SearchBar/SearchBar";



function CarouselComponent(props) {
    return <div className={"content-position"}>
        <div>
            <img src={Img2}/>
        </div>

        <span className="centered">

            <SearchBar/>
        </span>
    </div>
}

export default CarouselComponent;