import React from 'react';
import {
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import app from "../../firebaseConfig"

function MenuLinksLoggedIn(){
    return(
        <React.Fragment>
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/agencies">Agencies</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="/reviews">Write a Review:</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="menu-text li-menu-padding" href="#" onClick={() => app.auth().signOut()}>Log Out</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </React.Fragment>
    )
}

export default MenuLinksLoggedIn;