import Producto from "../models/Productos.js";
import Local from "../models/Local.js";



const obtenerTiendas = async (req, res) => {
    const tiendas = await Local.find({ tienda: true }).select("nombre direccion gps urlLogo diasAbiertos telefonoUno ruta");
    res.json(tiendas);
    console.log('tiendas obtenidas');
}

const obtenerTienda = async (req, res) => {
    const { ruta } = req.params; // Obtiene el valor de "ruta" desde los parámetros

    try {
        // Utiliza el valor de "ruta" para buscar la tienda por ese campo
        const tienda = await Local.findOne({ ruta });

        if (!tienda) {
            // Si no se encuentra la tienda, puedes enviar una respuesta de error
            return res.status(404).json({ mensaje: 'Tienda no encontrada' });
        }

        // Si se encuentra la tienda, envía la respuesta con la tienda encontrada
        res.json(tienda);
    } catch (error) {
        // Manejo de errores en caso de una excepción
        res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
};


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