import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import conectarDB from './config/db.js';
import usuarioRoutes from "./routes/usuarioRoutes.js";
import pedidoRoutes from "./routes/pedidoRoutes.js";
import localRoutes from "./routes/localRoutes.js";
import clienteRoutes from "./routes/clienteRoutes.js";

const app = express();
app.use(express.json());

dotenv.config()
conectarDB()

//cors
const whitelist = ['https://admin.warasdelivery.com','https://moto.warasdelivery.com', "http://localhost:5173", "http://192.168.100.5:19000"];



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

const PORT = 4000 //process.env.PORT || 4000

const servidor = app.listen(PORT,()=> {
    console.log(`servidor corriendo en el puerto ${PORT}`);
})

//Sockets.io
import {Server} from 'socket.io'

const io = new Server(servidor, {
    pingTimeout:60000,
    cors:{
        origin: ['https://admin.warasdelivery.com','https://moto.warasdelivery.com', "http://localhost:5173", "http://192.168.100.5:19000"]
    },
});

io.on('connection', (socket)=> {
    console.log('conectado a socKet.io');

    //eventos
    socket.on('ver pedidos', (pedidos)=> {
        socket.join(pedidos)
        socket.emit('respuesta', {nombre:"Reimer"})
    })

    socket.on('crear pedido', pedido => {
        console.log(pedido);
        socket.emit('respuesta', pedido)
    })
})