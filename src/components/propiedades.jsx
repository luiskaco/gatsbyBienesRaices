import React from 'react'
import Iconos from './iconos';
import styled from '@emotion/styled';
// Obtimizador de imagen que ya viene instalado
import Image from 'gatsby-image';
// Nota: Se puede pasar de prop fluid entre otras.

import Layout from './layout';

// Importar Solo grahpq
import {graphql} from 'gatsby';

/**
 *  Nota: No se usa useStaticQuery, debido a que este se ejecuta a medida que se van generando. Y ya el contenido proveniendo de gatsby-node esta siendo generado. 
 * 
 */
export const query = graphql`
    query($id: String!){
        allStrapiPropiedades(filter: {id :{ eq:$id } }){
            nodes{
                nombre
                estacionamiento
                descripcion
                wc
                habitaciones
                precio
                agente{
                    nombre
                    telefono
                    correo
                }
                imagen{
                    sharp: childImageSharp{
                        fluid (maxWidth: 1200){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;

const Contenido = styled.div`
    max-width:1200px;
    margin: 0 auto;
    width:95%;

    @media (min-width: 758px) {
        display:grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }

`;

const Sidebar = styled.aside`
    .precio{
        font-size: 2rem;
        color:#75AB00;
    }
    .agente{
        margin-top:4rem;
        border-radius:2rem;
        background-color: #75AB00;
        padding: 3rem;
        color:#fff;
    }
    p{
        margin:0;
    }
`;



/*
    nota: El id se pasa automaticamente porque proviene del context de gatsby node
*/
    // Aplicamos destructuring a data
const Propiedades = ({data: {allStrapiPropiedades: {nodes}}}) => {

   //console.log(data);
    
    const {
        nombre,
        estacionamiento,
        descripcion,
        wc,
        habitaciones,
        precio,
        agente,
        imagen
    } = nodes[0];
   
   return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image
                        fluid={imagen.sharp.fluid}

                    />
                    <p>{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">$ {precio}</p>
                    <Iconos 
                        wc={wc}
                        estacionamiento={estacionamiento}
                        habitaciones={habitaciones}
                    />
                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p>{agente.nombre}</p>
                        <p>Tel: {agente.telefono}</p>
                        <p>Email: {agente.correo}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
        
     );
}
 
export default Propiedades;