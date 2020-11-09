import React, {useState, useEffect} from 'react';
import {css} from '@emotion/core';
import usePropiedades from '../hooks/usePropiedades';

import PropiedadPreview from './propiedadPreview';

import listadoPropiedadesCSS from '../css/listadoPropiedades.module.css';

import useFiltro from '../hooks/useFilter';
//import { useStaticQuery } from 'gatsby';

const ListadoPropiedades = () => {

    // Usuando hook de consulta de propiedades
    const resultado = usePropiedades();

    
    // creando y cargando el state con los datos de propiedades
    const [propiedades] = useState(resultado);
    
    // Filtrado de propiedades
    const [filtradas, setFiltradas] = useState([]);

    // Filtrado de propiedades
    const {categoria,FiltroUI} = useFiltro();
    /*
        nota: Obtenemos el state y la funcion
    */
    // console.log(categoria);

    // Compranndo que existe valores para llenar el state
    useEffect(() => {
        // Si existe una categoria
        if(categoria){
                     
            const filtro = propiedades.filter(propiedad => propiedad.categoria.nombres === categoria );
            setFiltradas(filtro);
        
        }else{
            // Si no, mantenemos los valores iniciales de la propiedades
            setFiltradas(propiedades);
        }

        
    }, [categoria,propiedades])

    return ( 
        <>
        <h2 css={css`
            margin-top:5rem;  
        `}>Nuestras Propiedades
        </h2> 

        {
         /** LLAMADO DE LA FUNCION */
        FiltroUI()
        
        }
        
        <ul className={listadoPropiedadesCSS.propiedades}>
            {
               filtradas.map(propiedad =>(
                    <PropiedadPreview 
                        key={propiedad.id}
                        propiedad={propiedad}
                    /> 
               )) 
            }        
        </ul>    
        </>
        
    );
}
 
export default ListadoPropiedades;