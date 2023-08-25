import mongoose from "mongoose";

const localSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            trim: true,
        },
        direccion: {
            type: String,
        },
        gps: {
            type: String,
        },
        telefonoUno: {
            type: String,
        },
        telefonoDos: {
            type: String,
        },
        telefonoTres: {
            type: String,
        },
        urlLogo: {
            type: String,
        },
        colaboradores: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Usuario",
            },
        ],
        habilitado: {
            type: Boolean,
            default: true,
        },
        tienda:{
            type:Boolean
        },
        urlWeb: {
            type:String
        },
        facebook:{
            type:String
        },
        urlBanner: {
            type:String
        },
        horario: {
            type:String
        },
        ubicacion:{
            type:String
        },
        tiempoPreparacion:{
            type:String
        },
        direccion:{
            type:String
        },
        diasAbiertos:[],
        horaInicioFin:[],
        adicionalPorTaper:{
            type:String
        }
    },
    {
        timestamps: true,
    }
);

const Local = mongoose.model("Local", localSchema);
export default Local;
