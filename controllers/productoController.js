import Producto from "../models/Productos.js";
import Local from "../models/Local.js";



const obtenerTiendas = async (req, res) => {
    const tiendas = await Local.find({ tienda: true }).select("nombre direccion gps urlLogo diasAbiertos telefonoUno ruta horario ubicacion tiempoPreparacion horaInicioFin adicionalPorTaper");
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

const obtenerProductosPorTienda = async (req, res) => {
    const { idLocal } = req.body;
    console.log("ID de la tienda:", idLocal);
    

    try {
        // Verifica si idLocal es un valor válido antes de realizar la consulta
        if (!idLocal) {
            return res.status(400).json({ error: "ID de tienda no proporcionado" });
        }

        // Utiliza async/await para esperar la consulta a la base de datos
        const productos = await Producto.find({ local: idLocal }).sort({ precio: 1 });

        if (!productos || productos.length === 0) {
            return res.status(404).json({ error: "No se encontraron productos para esta tienda" });
        }

        // Envía la respuesta con los productos encontrados
        res.json(productos);

        console.log("productos obtenidos",productos.length);
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


const agregarProducto = async (req, res) => {
    const { localId, nombre, categoria,subcategorias, descripcion, precio,taper, imagen, preciosCompetencia, cover } = req.body;

    const nuevoProducto = new Producto({
        local: localId,
        nombre,
        categoria,
        descripcion,
        precio,
        imagen,
        preciosCompetencia,
        subcategorias,
        taper,
        cover
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
    obtenerTienda,
    agregarProducto,
    obtenerProductosPorTienda
};