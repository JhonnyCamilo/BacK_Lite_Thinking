const mongoose = require('mongoose');

const DatosSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
       
    },
    direccion: {
        type: String,
        required: true,
        trim: true
       
    },
    nit: {
        type: String,
        required: true,
        trim: true
    },
    telefono: {
        type: String,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        
        required: true,
        trim: true
    },
    creado: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Datos', DatosSchema);