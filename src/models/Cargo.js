import mongoose from "mongoose";

const cargoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true}
    }
);

const cargos =  mongoose.model('cargo', cargoSchema);

export default cargos;