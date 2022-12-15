import express from "express"
import departamentosController from "../controler/departamentosController";

const router = express.Router();

router

    .get('/departamento', departamentosController.listarDepartamentos)

    .get("/departamento/:id", departamentosController.getDepartamentosById)

    .post("/departamento", departamentosController.cadastrarDepartamento)

    .put("/departamento/:id", departamentosController.atulizarDepartamento)

    .delete("/departamen/:id", departamentosController.excluirDepartamento)
    

export default router;
