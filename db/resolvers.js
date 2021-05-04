const Datos = require('../models/Datos');

require('dotenv').config({path: 'variables.env'});



const resolvers = {
    Query: {
     
      obtenerDatos: async (_, {}) => {
            const datos = await Datos.find ({ });
            return datos;
        }
    },
        Mutation: {
       
            crearDato: async (_, { nombre, direccion, nit, telefono, imagen }) => {
                const newDato = new Datos({ nombre, direccion, nit, telefono, imagen   });
                return await newDato.save();
              },   
      
    }
   
}


module.exports = resolvers;