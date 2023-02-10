const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const Categoria = require('../models/categoria');


const getCategorias = async (req = request, res = response) => {
    const query = { estado: true };
    const listaCategorias = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);
    res.json({
        msg: 'get Api - Controlador Categoria',
        listaCategorias
    });
}


const postCategoria = async (req = request, res = response) => {

    //Desestructuración
    const { nombre, calidad, tamaño, descripcion } = req.body;
    const categoriaGuardadoDB = new Categoria({ nombre, calidad, tamaño, descripcion });
    
    // Guardar en DB
    await categoriaGuardadoDB.save();
    res.json({
        msg: 'Post Api - Post Categoria',
        categoriaGuardadoDB
    });
}


const putCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, estado, google, ...resto } = req.body;
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);
    res.json({
        msg: 'PUT editar categoria',
        categoriaEditado
    });
}

const deleteCategoria = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const categoriaEliminado = await Categoria.findByIdAndDelete(id);
    res.json({
        msg: 'DELETE eliminar categoria',
        categoriaEliminado
    });
}

module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}
