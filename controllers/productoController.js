import Producto from "../models/Productos.js";
import Local from "../models/Local.js";



const obtenerTiendas = async (req, res) => {
    const tiendas = await Local.find({ tienda: true }).select( "nombre direccion gps urlLogo diasAbiertos telefonoUno"); 
    res.json(tiendas);
}

const obtenerTienda = async(req, res) => {
    const {id} = req.params;
    const tienda = await Local.findById(id)
    res.json(tienda)
}

export {
    obtenerTiendas,
    obtenerTienda
};