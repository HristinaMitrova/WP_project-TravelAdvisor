import React from "react";
import { Carousel } from "react-responsive-carousel";

import bgImg3 from '../../assets/images/ccc.jpg'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CarouselComponent.css'
import SearchBar from "../SearchBar/SearchBar";


function CarouselComponent(props) {
    return <div className={"content-position"}>
        <Carousel autoPlay={true} showIndicators={false} showArrows={false} width={"100%"} showThumbs={false}>

            <div>
                <img src={bgImg3}/>
            </div>
        </Carousel>
        <span className="centered">
            <SearchBar searchByLocation={props.searchByLocation}/>
        </span>
    </div>
}

export default CarouselComponent;