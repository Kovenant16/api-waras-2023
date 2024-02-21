import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import conectarDB from './config/db.js';
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import localRoutes from "./routes/localRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";
import productoRoutes from "./routes/productoRoutes.js"
import categoriaRoutes from "./routes/categoriaRoutes.js"

const app = express();
app.use(express.json());

dotenv.config()
conectarDB()

//cors
const whitelist = ['https://admin.warasdelivery.com', 'https://moto.warasdelivery.com', "http://localhost:5173", "http://192.168.100.5:19000", "http://192.168.100.24:5173", "http://localhost:3000", "https://socio.warasdelivery.com"]



//Cors con acceso a un dominio

const corsOptions = {
    origin: function (origin, callback) {

        if (whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Error de cors de aca"));
        }
    },
};

app.use(cors())



app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/locales", localRoutes);
app.use("/api/clientes", clienteRoutes);
app.use("/api/tienda", productoRoutes);
app.use("/api/categoria", categoriaRoutes)

const PORT = 4000 //process.env.PORT || 4000

const servidor = app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})

//Sockets.io
import { Server } from 'socket.io'

const io = new Server(servidor, {
    pingTimeout: 60000,
    cors: {
        origin: ['https://admin.warasdelivery.com', 'https://moto.warasdelivery.com', "http://localhost:5173", "http://192.168.100.5:19000", "http://192.168.100.24:3000", "http://192.168.100.224:5173", "http://localhost:3000", "https://socio.warasdelivery.com"]
    },
});
