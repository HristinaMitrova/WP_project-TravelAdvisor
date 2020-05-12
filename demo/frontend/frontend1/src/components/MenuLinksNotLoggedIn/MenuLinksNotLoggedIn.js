import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

function MenuLinksNotLoggedIn(){
    return(
        <React.Fragment>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/agencies">Agencies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/login">Log In</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/register">Register</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </React.Fragment>
    )
}

export default MenuLinksNotLoggedIn;