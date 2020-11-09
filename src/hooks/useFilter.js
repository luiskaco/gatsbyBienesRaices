import React, { useState } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import styled from '@emotion/styled';

// Creando los style componente del select
const Formulario = styled.form`
    width:100%;
    display:flex;
  
    border: 1px solid #e1e1e1;
    max-width:1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex:1; // Para que crezca
    padding: 1rem;
    appearance: none;
    border:none;
    font-family: 'Lato', sans-serif;

`;

const useFiltro = () => {

    // definiendo la accion del select
    const [ categoria , setCategoria] = useState('');

    // COnsultando las categorias que seran filtradas
    const busquedaCategoria = useStaticQuery(graphql`
        query {
            allStrapiCategorias{
            nodes{
                nombres
                id
            }
            }
        }
    `);

    // Guardando valores consultado en la variable que luego sera recorridas
    const categorias = busquedaCategoria.allStrapiCategorias.nodes;

    // console.log(categorias);
    
 
    const FiltroUI = () => (
        <Formulario>
            <Select
                onChange={e => setCategoria(e.target.value)}
            >
                <option value="">-- Filtrar --</option>
                {categorias.map(option => (
                    <option key={option.id} value={option.nombres}> {option.nombres}</option>

                ))}
            </Select>
        </Formulario>
    );
    
    return {
        categoria,  // Retornamos state
        FiltroUI    // Retornamos funciones
    };
}
 
export default useFiltro;