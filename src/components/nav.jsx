import React from 'react'
import {Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display:flex;
    flex-direction:column;
    padding-bottom:3rem;

    @media (min-width: 768px) {
        padding:0;
        flex-direction:row;
    }
    
`;


const NavLink = styled(Link)`
    /*APlicando estilo al link */
    color:#fff;
    font-weight:700;
    font-family:'PT Sans', sans-serif;
    text-decoration:none;
    padding: .5rem;
    margin-right: 1rem;

    &:last-of-type{
        margin-right:0;
    }

    &.pagina-actual{
        border-bottom: 1px solid #fff;
    }
`;


const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink 
                to="/"
                // Prop para agregar active el menu
                activeClassName="pagina-actual"
            > Inicio </NavLink>
            <NavLink 
                // Prop para agregar active el menu
                activeClassName="pagina-actual"
                to="/nosotros"
            > Nosotros </NavLink>
            <NavLink
                // Prop para agregar active el menu
                activeClassName="pagina-actual" 
                to="/propiedades"
            > Propiedades </NavLink>
        </Nav>
     );
}
 
export default Navegacion;
