import React from 'react';
import {NavLink} from 'react-router-dom'; //Adding links to our nav items
//Adding styling to our components
import styled from 'styled-components';


const NavMenuStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 1rem 0rem;
    background: var(--dark-bg);
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%auto;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            &:hover{
                background-color: var(--deep-dark);
            }
        }
        a{
            display:inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 1rem;
            font-size: 2rem;
            color: var(--gray-1);
            outline: none;
        }
        .active{
            color: var(--white);
        }
    }
`;

const NavMenu = () => {
    return(
        <NavMenuStyles>
            <ul>
                <li>
                    <NavLink to="/" exact>Home</NavLink>    
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