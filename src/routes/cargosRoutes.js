import express  from "express";
import cargosController from "../controler/cargosController";

const router = express.Router();

router

 .get('/cargos', cargosController.listarCargos)

    .get("/cargos/:id", cargosController.getCargosById)

    .post("/cargos", cargosController.cadastrarCargo)

    .put("/cargos/:id", cargosController.atulizarCargo)

    .delete("/cargos/:id", cargosController.excluirCargo)

export default router;