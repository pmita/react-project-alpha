import React from 'react';
import {NavLink} from 'react-router-dom'; //Adding links to our nav items
//Adding styling to our components
import styled from 'styled-components';


const NavMenuStyles = styled.div`
    background: red;
`;

const NavMenu = () => {
    return(
        <NavMenuStyles>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>    
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>    
                </li>
                <li>
                    <NavLink to="/projects">Projects</NavLink>    
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>    
                </li>
            </ul>
        </NavMenuStyles>
    );
}

export default NavMenu;