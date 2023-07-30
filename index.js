import express from 'express'
import dotenv from "dotenv"
import conectarDB from './config/db.js';
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import localRoutes from "./routes/localRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";

const app = express();

dotenv.config()
conectarDB()

//Routing
app.use("/", (req, res) => {
    res.send("Hola mundo")
})

app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/locales", localRoutes);
app.use("/api/clientes", clienteRoutes);

const PORT = process.env.PORT || 4000

app.listen(PORT,()=> {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})