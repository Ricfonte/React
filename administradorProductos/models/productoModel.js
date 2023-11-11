import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema(
    {
       nombre: String,
       precio: Number,
       descripcion: String,
       isNuevo: Boolean
    }
);

const Producto = mongoose.model("productos", ProductoSchema);
export default Producto;