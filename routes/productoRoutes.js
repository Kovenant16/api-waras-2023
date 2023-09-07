import express from 'express'
import {obtenerTiendas, obtenerTienda} from '../controllers/productoController.js'
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.get("/tiendas", obtenerTiendas)
router.get("/:ruta", obtenerTienda)

export default router;