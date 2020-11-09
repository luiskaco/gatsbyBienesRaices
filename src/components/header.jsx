import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Navegacion from './nav';
import {css} from '@emotion/core';

const Header = () => {

    // COnsultar Logo svg

    // Destructour al objeto logo | graohql
    const {logo} = useStaticQuery(graphql`
        query MyQuery {
            logo: file(relativePath:{eq:"logo.svg"}){
            publicURL,
            id
            }
        } 
    `);

    //console.log(logo);

    return ( 
        <header
            css={css`
                background-color: #0D2838;
                padding: 1rem;

            `}
        >
            <div 
                 css={css`
                      max-width:120rem; /*1200px*/
                      margin: 0 auto;
                      text-align:center;

                      @media (min-width: 768px) {
                          display:flex;
                          align-items:center;
                          justify-content:space-between;
                      }

                 `}
            >
                <Link to="/">
                   <img src={logo.publicURL} alt="Logotipo Bienes Raices" />
                </Link>

                <Navegacion />
            </div>
        </header>

     );
}
 
export default Header;