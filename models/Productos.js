import mongoose from "mongoose";

const productoSchema = mongoose.Schema(
    {
        local: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Local", // Referencia al modelo "Local"
        },
        nombre: {
            type:String
        },
        categoria:{
            type:String
        },
        descripcion:{
            type:String
        },
        precio:{
            type:String
        },
        imagen: {
            type:String
        },
        preciosCompetencia : [
            {
                nombreCompetidor:String,
                precioCompetencia:String,
                logoCompetidor:String
            }
        ]
    }
);
const Producto = mongoose.model("Producto", productoSchema)

export default Producto;