const { Router } = require('express');
const { getCategorias, postCategoria, putCategoria, deleteCategoria } = require('../controllers/categoria');
const router = Router();


router.get('/', getCategorias);

router.post('/agregar', postCategoria);

router.put('/editar/:id', putCategoria);

router.delete('/eliminar/:id', deleteCategoria);

module.exports = router;
