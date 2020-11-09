/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

/*

    Nota: Este archivo nos permite crear el contenido dinamico para que luego sea convertido en contenido estatido.

*/

/**  urlSlug paquete **/
const urlSlug = require('url-slug');

// Se pasan automatico actions, graph y reporter

exports.createPages = async ({ actions, graphql, reporter}) =>{
    const resultado = await graphql(`
            query{
                allStrapiPaginas{
                    nodes{
                        nombre
                        id
                    }
                }
                allStrapiPropiedades{
                nodes{
                    nombre
                    id
                }
            }
        }  
    `);

   // console.log(JSON.stringify(resultado.data.allStrapiPropiedades));
    
      // Para no tificar que no hay consulta
     if(resultado.errors){
        reporter.panic('No hubo resultados', resultado.errores);
     }

     // Si hay resultado generar los archivos estaticos
     const paginas = resultado.data.allStrapiPaginas.nodes;
     const propiedades = resultado.data.allStrapiPropiedades.nodes;

    // console.log(propiedades);

     // Crear los template de paginas
     paginas.forEach(pagina =>{
        //console.log(urlSlug(propiedad.nombre));
        
        actions.createPage({
            // genera los nombre de la pagina
            path:urlSlug(pagina.nombre),
            // Que componente les dan las apariencia
            component: require.resolve('./src/components/paginas.jsx'),
            // Pasar variables al componente
            context:{
                id:pagina.id
            }
        })
    });

    
     // Crear los templaes de propiedades
    propiedades.forEach(propiedad =>{
        //console.log(urlSlug(propiedad.nombre));
        
        actions.createPage({
            // genera los nombre de la pagina
            path:urlSlug(propiedad.nombre),
            // Que componente les dan las apariencia
            component: require.resolve('./src/components/propiedades.jsx'),
            // Pasar variables al componente
            context:{
                id:propiedad.id
            }
        })
    });

}