import React from 'react'
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';
import heroCSS from '../css/hero.module.css';

// Paquete de background de imagen
import BackgroundImage from 'gatsby-background-image';


const ImageBackground = styled(BackgroundImage)`
    height:300px;
`;

const Encuentra = () => {
    
    /*Nota: se peude crear la consulta del query en un hooks o directamente en el componene. 
    la performance es la misma. */

    const { imagen } = useStaticQuery(graphql`
        query{
            imagen: file(relativePath: {eq:"encuentra.jpg"}){
                 sharp: childImageSharp{
                     fluid(maxWidth:1500){
                        ...GatsbyImageSharpFluid_withWebp
                     }
                 }
            }
        }
    `);

    //console.log(imagen);
    return ( 
        <ImageBackground 
            tag="section"
            fluid={imagen.sharp.fluid} 
            fadeIn="soft"
        >
            <div className={heroCSS.imagenbg}>
                <h3 className={heroCSS.titulo}>Encuentra la Casa de Tu sueños</h3>
                <p>15 años de experiencia</p>
            </div>        
            
        </ImageBackground>
     );
}
 
export default Encuentra;