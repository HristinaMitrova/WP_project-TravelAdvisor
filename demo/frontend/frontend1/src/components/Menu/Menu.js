import React, {useContext} from 'react';
import vimage from '../../assets/images/trlogo222.ico'
import './Menu.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import {AuthContext} from "../../Auth";
import MenuLinksLoggedIn from "../MenuLinksLoggedIn/MenuLinksLoggedIn";
import MenuLinksNotLoggedIn from "../MenuLinksNotLoggedIn/MenuLinksNotLoggedIn";

function Menu (){

    const {currentUser} = useContext(AuthContext);

    if(currentUser==null)
        return (
            <Navbar className="navbar fixed-top navbar-expand-lg menu-bg">
                <div className="container">
                    <NavbarBrand href="/">
                        <div>
                            <img src={vimage}/>
                            <div className={"menu-text-brand menu-text"}><a className={"menu-brand"} href={"/"}>Make smarter traveling decisions</a></div>
                        </div>
                    </NavbarBrand>
                    <MenuLinksNotLoggedIn/>
                </div>
            </Navbar>
        );
    else return(
        <Navbar className="navbar fixed-top navbar-expand-lg menu-bg">
            <div className="container">
                <NavbarBrand href="/">
                    <div>
                        <img src={vimage}/>
                        <div className={"menu-text-brand menu-text"}><a className={"menu-brand"} href={"/"}>Make smarter traveling decisions</a></div>
                    </div>
                </NavbarBrand>
                <MenuLinksLoggedIn/>
            </div>
        </Navbar>
    )
}

export default Menu;