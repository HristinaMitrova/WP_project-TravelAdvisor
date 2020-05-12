import React, {Component} from 'react';
import './Header.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from "../Menu/Menu";
import CarouselComponent from "../BackgroundComponent/CarouselComponent"
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Header extends Component {
    render(){
        return (
            <div className={"container-fluid clear-padding"}>
            <Menu/>
            <CarouselComponent searchByLocation={this.props.searchByLocation}/>
            </div>
        );
    }
}

export default Header;
