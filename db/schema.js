const  {  gql } = require('apollo-server');

const typeDefs = gql`
type Query {
        obtenerDatos : [Datos]   
          }   
type Datos {
        id: ID
        nombre: String
        direccion: String
        nit: String
        telefono: String
        imagen: String
        }
input DatosInput {
        nombre: String
        direccion: String
        nit: String
        telefono: String
        imagen: String
        }
type Mutation {  
        crearDatos(input: DatosInput) : String     
    }
`;

module.exports = typeDefs;