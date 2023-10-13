import express from 'express'
import {
    obtenerTiendas,
    obtenerTienda,
    agregarProducto,
    obtenerProductosPorTienda,
    eliminarProducto,
    editarProducto
} from '../controllers/productoController.js'
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.get("/tiendas", obtenerTiendas)
router.get("/:ruta", obtenerTienda)
router.post("/agregarProducto", agregarProducto)
router.put("/:id", editarProducto);
router.delete("/:id", eliminarProducto)
router.post("/obtenerProductosPorTienda", obtenerProductosPorTienda)

export default router;