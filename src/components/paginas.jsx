import React from 'react'
import styled from '@emotion/styled'; 
// Obtimizador de imagen que ya viene instalado
import Image from 'gatsby-image';
// Nota: Se puede pasar de prop fluid entre otras.

import Layout from './layout';

// Componente de listado
import ListadoPropiedades from './listadoPropiedades';

// Importar Solo grahpq
import {graphql} from 'gatsby';

/**
 *  Nota: No se usa useStaticQuery, debido a que este se ejecuta a medida que se van generando. Y ya el contenido proveniendo de gatsby-node esta siendo generado. 
 * 
 */
export const query = graphql`
    query($id: String){
        allStrapiPaginas(filter: {id: {eq : $id}} ){
        nodes{
                nombre
                contenido
                imagen {
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

const ContenidoPagina = styled.div`
    max-width:1200px;
    margin:0 auto; 
    width:95%;
    @media(min-width:768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:5rem;
    }

`;



/*
    nota: El id se pasa automaticamente porque proviene del context de gatsby node
*/
    // Aplicamos destructuring a data
const Propiedades = ({data: {allStrapiPaginas: {nodes}}}) => {

    // console.log(nodes);
    const { nombre, contenido , imagen} = nodes[0];

   
   return ( 
        <Layout>
            <main className="contenedor">
                <h1>{nombre}</h1>
                <ContenidoPagina>
                    
                    <Image
                        fluid={imagen.sharp.fluid}
                    />
                    <p>{contenido}</p> 
                </ContenidoPagina>  
            </main>

            
            {
              /**VALIDANDO es propiedades. Nos traemos el componente  */
            nombre === 'Propiedades' && (<ListadoPropiedades />)}
        </Layout>
     );
}
 
export default Propiedades;