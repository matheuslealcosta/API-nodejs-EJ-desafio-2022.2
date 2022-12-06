import mongoose from "mongoose";

mongoose.connect("mongodb+srv://MatheusLealCosta:matheus1234@cluster0.tlbwo04.mongodb.net/codejr");

let db = mongoose.connection;

export default db;