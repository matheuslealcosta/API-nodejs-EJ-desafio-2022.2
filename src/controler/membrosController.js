import membros from "../models/Membro";

class membrosController {

    static listarMemmbros = (req, res) => {
        membros.find((err, membros) => {
            res.status(200).json(membros)
        })
    }
}

export default membrosController;