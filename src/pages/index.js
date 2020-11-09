import React from 'react';
//Componente
import Layout from '../components/layout';
import Encuentra from '../components/encuentra';
import ListadoPropiedades from '../components/listadoPropiedades';
// Hook
import useInicio  from '../hooks/useInicio';
// Css
import {css} from '@emotion/core';
import styled from '@emotion/styled';
// Modulos css
import heroCSS from '../css/hero.module.css';




// Paquete de background de imagen
import BackgroundImage from 'gatsby-background-image';

const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
`;

const Index = () => {

    const inicio = useInicio();
    // Destructuring a inicio en la posicion 0
    const { nombre, contenido, imagen } = inicio[0];
    

    /* Mota: Para hacer uso de los modulos, 
    
        1 - Se importa.
        2 - Se define el nombre de preferencia
        3 - Luego se aplica className={heroCSS.imagenbg} marcando el selector que se desea  usar.
    
    */
    return ( 
    
        <Layout>
            <ImagenBackground
                tag="section"
                // Si se usa un ṕrop de tipo fluid se debe enviar una imagen tipo fluid
                fluid={imagen.sharp.fluid}
                /*css={css`
                    height: 600px; // Es necesario para que se muestre la imagen
                `}*/
                fadeIn="soft"
            >   
               
                <div className={heroCSS.imagenbg}> 
                    <h1 className={heroCSS.titulo}>Ventas de Casas y Departamentos Exclusivos</h1>
                </div>
            </ImagenBackground>
            <main>
                <div css={css`
                    max-width: 800px;
                    margin:0 auto;
                ` }
                >


                </div>
            </main>
            <h2>{nombre}</h2> 
            <p css={
                css`
                    text-align:center;
                `
            }>{contenido}</p>


            <Encuentra />

            <ListadoPropiedades />
        </Layout>

    );
}
 
export default Index;