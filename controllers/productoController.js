import Producto from "../models/Productos.js";
import Local from "../models/Local.js";



const obtenerTiendas = async (req, res) => {
    const tiendas = await Local.find({ tienda: true }).select("nombre direccion gps urlLogo diasAbiertos telefonoUno");
    res.json(tiendas);
}

const obtenerTienda = async (req, res) => {
    const { id } = req.params;
    const tienda = await Local.findById(id)
    res.json(tienda)
}


const agregarProducto = async (req, res) => {
    const { localId, nombre, categoria, descripcion, precio, imagen, preciosCompetencia } = req.body;

    const nuevoProducto = new Producto({
        local: localId,
        nombre,
        categoria,
        descripcion,
        precio,
        imagen,
        preciosCompetencia
    });

    try {
        const productoAlmacenado = await nuevoProducto.save();
        res.status(201).json(productoAlmacenado);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'Error en el servidor' });
    }
}



export {
    obtenerTiendas,
    obtenerTienda
};