import {graphql, useStaticQuery} from 'gatsby';


const usePropiedades  = () =>{
    const datos = useStaticQuery(graphql`
        query{
            allStrapiPropiedades{
            nodes{
                nombre
                descripcion
                id
                wc
                precio
                estacionamiento
                habitaciones
                categorias{
                    nombres
                }
                agente{
                    nombre
                    telefono
                    correo
                }
                imagen{
                    sharp: childImageSharp{
                        fluid(maxWidth:600, maxHeight:400){
                           ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
            }
        }
    `);

    //console.log(datos);
   
    return  datos.allStrapiPropiedades.nodes.map(propiedades => ({
        nombre: propiedades.nombre,
        descripcion: propiedades.descripcion,
        imagen: propiedades.imagen,
        id: propiedades.id,
        wc: propiedades.wc,
        estacionamiento: propiedades.estacionamiento,
        habitaciones: propiedades.habitaciones,
        precio: propiedades.precio,
        categoria: propiedades.categorias,
        agente: propiedades.agente,
        

    }))
}

export default usePropiedades;