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


function Menu (){




        return (
            <Navbar className="navbar fixed-top navbar-expand-lg menu-bg">
                <div className="container">
                    <NavbarBrand href="/">
                        <div>
                            <img className="logo" src={vimage}/>
                            <div className={"menu-text-brand menu-text"}><a className={"menu-brand"} href={"/"}>Make smart traveling decisions</a></div>
                        </div>
                    </NavbarBrand>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/agencies">Agencies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/reviews" >Reviews</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/register">Register</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/login" >Log In</NavLink>
                    </NavItem>

                </div>
            </Navbar>
        );

}

export default Menu;