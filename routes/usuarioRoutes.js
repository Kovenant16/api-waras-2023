import express from "express";
const router = express.Router();

import {
    registrarUsuario,
    autenticarUsuarioAdmin,
    registrarUsuarioAdmin,
    registrarUsuarioSocio,
    registrarUsuarioMoto,
    autenticarUsuarioMotorizado,
    confirmarUsuario,
    olvidePassword,
    comprobarToken,
    nuevoPassword,
    perfil,
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";

//auth, registro y confirmacion de usuarios

router.post("/", registrarUsuario)
router.post("/registrarAdmin", registrarUsuarioAdmin);
router.post("/registrarSocio", registrarUsuarioSocio);
router.post("/registrarMoto", registrarUsuarioMoto);
router.post("/loginMoto", autenticarUsuarioMotorizado)
router.post("/login", autenticarUsuarioAdmin);
router.get("/confirmar/:token", confirmarUsuario);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);

router.get("/perfil", checkAuth, perfil);

export default router;
