import mongoose from "mongoose";

const subcategoriaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number, // Mantenemos el tipo Number para precios con decimales
});

const productoSchema = mongoose.Schema({
    local: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Local", // Referencia al modelo "Local"
    },
    nombre: String,
    categoria: String,
    descripcion: String,
    subcategorias: [subcategoriaSchema], // Un arreglo de subcategorías
    precio: Number, // Mantenemos el tipo Number para precios con decimales
    cover: String,
    taper:Boolean,
    preciosCompetencia: [
        {
            nombreCompetidor: String,
            precioCompetencia: Number, // Mantenemos el tipo Number para precios con decimales
            logoCompetidor: String,
        },
    ],
});

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;
