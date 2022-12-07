import express  from "express";
import membrosController from "../controler/membrosController";

const router = express.Router();

router
    .get('/membros', membrosController.listarMemmbros)

    .get("/membros/:id", membrosController.getMembrosbyId)

    .post("/membros", membrosController.cadastrarMembro)

    .put("/membros/:id", membrosController.atulizarMembro)

    .delete("/membros/:id", membrosController.excluirMembro)


export default router;