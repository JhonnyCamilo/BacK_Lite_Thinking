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
       
            crearDatos : async (_, {input}) => {
                try {
                    
                    const datos= new Datos(input);
                    datos.save();
                    return "Dato creado exitosamente";
                } catch (error) {
                    console.log(error);
                }
            }    
      
    }
   
}


module.exports = resolvers;