import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './StickyFooter.css'
import FooterLinks from "./FooterLinks/FooterLinks";
import FooterSocials from "./FooterSocials/FooterSocials";


class StickyFooter extends Component {
    render(){
        return (
            <div className={"container-fluid footer-bg pt-3 pb-4"}>
                <div className={"row"}>
                    <div className={"col"}>

                        <FooterLinks/>
                    </div>
                    <div className={"col"}>
                        <FooterSocials/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StickyFooter;