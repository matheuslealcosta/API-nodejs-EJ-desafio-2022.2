import membros from "../models/Membro";

class membrosController {

    static listarMemmbros = (req, res) => {
        membros.find()
        .populate('departamentos')
        .populate('cargos')
        .execute((err, membros) => {
            res.status(200).json(membros)
        })
    }

    static getMembrosbyId =  (req, res) => {

    }
}

export default membrosController;