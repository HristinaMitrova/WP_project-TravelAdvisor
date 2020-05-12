import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './FooterLinks.css'

class FooterLinks extends Component {
    render(){
        return (
            <div className={"pt-3"}>
             <div className={"links-display"}>
                 <ul className={"ul-links"}>
                     <li className={"h5"}>Agencies</li>
                     <li className={"li-item"}><a href="/events/Скопје">Rhapsody Travel</a></li>
                     <li className={"li-item"}><a href="/events/Тетово">Iguana Tours</a></li>
                     <li className={"li-item"}><a href="/events/Битола">Savana Travel</a></li>
                     <li className={"li-item"}><a href="/events/Куманово">Balkan Fun</a></li>
                     <li className={"li-item"}><a href="/events/Прилеп">Zip</a></li>
                 </ul>
             </div>
             <div className={"links-display"}>
                 <ul className={"ul-links"}>
                     <li className={"h5"}>Most asked destinations</li>
                     <li className={"li-item"}><a href="/details/3">Spain</a></li>
                     <li className={"li-item"}><a href="/details/2">Germany</a></li>
                     <li className={"li-item"}><a href="/details/0">Portugal</a></li>
                     <li className={"li-item"}><a href="/details/6">Italy</a></li>
                     <li className={"li-item"}><a href="/details/5">Turkey</a></li>
                 </ul>
             </div>

                <div className={"links-display"}>
                    <ul className={"ul-links"}>
                        <li className={"h5"}>Most asked destinations</li>
                        <li className={"li-item"}><a href="/details/3">France</a></li>
                        <li className={"li-item"}><a href="/details/2">Dubai</a></li>
                        <li className={"li-item"}><a href="/details/0">Russia</a></li>
                        <li className={"li-item"}><a href="/details/6">Norway</a></li>
                        <li className={"li-item"}><a href="/details/5">Neatherlands</a></li>
                    </ul>
                </div>
                <div className={"links-display"}>
                    <div className={"row mb-4"}>
                        <div className={"col"}>
                            <ul className={"ul-links"}>
                                <li className={"h5"}>More Info</li>
                                <li className={"li-item"}><a href="/details/5">About us</a></li>
                                <li className={"li-item"}><a href="/details/5">Fun facts</a></li>
                                <li className={"li-item"}><a href="/details/5">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col"}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterLinks;