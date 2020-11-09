import React from 'react';
import Header from './header';
import Helmet from 'react-helmet'; // Nos Ayuda a modificar el head del html
import {Global, css} from '@emotion/core';


const Layout = ({children}) => {
    return ( 
        <>  
            <Global
                /* Codigo css global */
                styles={css`
                    html{
                        font-size:62.5%; /* Para rem */
                        box-sizing:border-box;
                    }
                    *, *:before:after{
                        box-sizing:inherit;
                    }
                    body{
                        font-size: 1.6rem;
                        line-height:2;
                        font-family: "Lato", sans-serif;
                    }
                    h1, h2,h3{
                        margin:0;
                        line-height:1.5;   
                    }
                    h1,h2{
                        text-align:center;
                        font-family:font-family: "Lato", sans-serif;
                        font-weight:300;
                    }
                    h3{
                        font-family: 'Roboto', sans-serif;
                    }

                    ul{
                        list-style:none;
                        margin:0;
                        padding:0;
                    }
                    .contenedor{
                        max-width: 120rem; /* Es igual a 1200px */
                        margin:0 auto;
                        width:95%;
                    }

                    img {
                        max-width:100%; /*Responsive */
                    }  
                `}

            >

            </Global>
            <Helmet>
                <title>Bienes Raices Gatsby</title>
                <meta name="description" content="Sitio web de bienes raices en Gatsby" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&family=Roboto:wght@700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header></Header>
           
            {children}

        </>
     );
}
 
export default Layout;