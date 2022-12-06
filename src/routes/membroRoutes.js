import express  from "express";
import membrosController from "../controler/membrosController";

const router = express.Router();

router
    .get('/membros', membrosController.listarMemmbros);