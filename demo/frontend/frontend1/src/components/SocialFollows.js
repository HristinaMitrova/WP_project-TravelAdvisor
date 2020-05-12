import React from 'react'
import './FooterLinks/FooterLinks.css'
import './SocialFollows.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram
}from '@fortawesome/free-brands-svg-icons';

export default  ()=> (
    <div className={"socialContainer"}>
        <a><FontAwesomeIcon icon={faFacebook}size="2x"/> </a>
        <a><FontAwesomeIcon icon={faTwitter}size="2x"/></a>
        <a className={"youtube social"}>
        <FontAwesomeIcon icon={faYoutube}size="2x"/>
        </a>
        <a><FontAwesomeIcon icon={faInstagram}size="2x"/></a>

    </div>
)