import express from "express";
const router = express.Router();

import {
    registrarUsuario,
    autenticarUsuarioAdmin,
    registrarUsuarioAdmin,
    registrarUsuarioSocio,
    registrarUsuarioMoto,
    autenticarUsuarioMotorizado,
    autenticarUsuarioSocio,
    confirmarUsuario,
    olvidePassword,
    olvidePasswordMoto,
    olvidePasswordSocio,
    comprobarToken,
    nuevoPassword,
    perfil,
    obtenerUsuarioPorEmail
} from "../controllers/usuarioController.js";

import checkAuth from "../middleware/checkAuth.js";

//auth, registro y confirmacion de usuarios

router.post("/", registrarUsuario)
router.post("/registrarAdmin", registrarUsuarioAdmin);
router.post("/registrarSocio", registrarUsuarioSocio);
router.post("/registrarMoto", registrarUsuarioMoto);
router.post("/loginMoto", autenticarUsuarioMotorizado)
router.post("/login", autenticarUsuarioAdmin);
router.post("/loginSocio", autenticarUsuarioSocio)
router.get("/confirmar/:token", confirmarUsuario);
router.post("/olvide-password", olvidePassword);
router.post("/olvide-password-moto", olvidePasswordMoto);
router.post("/olvide-password-socio", olvidePasswordSocio);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);
router.post("/buscarUsuarioPorEmail", obtenerUsuarioPorEmail)
router.get("/perfil", checkAuth, perfil);

export default router;
