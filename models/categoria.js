const { Schema, model } = require('mongoose');

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required:[true, 'El nombre es obligatorio']
    },
    calidad:{
        type: String,
        required:[true, 'La calidad es obligatoria']
    },
    tamaño:{
        type:String,
        required:[true, 'El tamaño es obligatorio'],
        unique: true
    },
    descripcion:{
        type:String,
        required:[true, 'La descripcion es obligatoria']
    },
    estado:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    }
});


module.exports = model('Categoria', CategoriaSchema);