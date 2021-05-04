const  {  gql } = require('apollo-server');

const typeDefs = gql`
type Query {
        obtenerDatos : [Dato]   
          }   
type Dato {
       
        nombre: String
        direccion: String
        nit: String
        telefono: String
        imagen: String
        }

type Mutation {  
        crearDato(
               
                nombre: String!,
                direccion: String!,
                nit: String!,
                telefono: String!,
                imagen: String!
        ): Dato    
    }
`;

module.exports = typeDefs;