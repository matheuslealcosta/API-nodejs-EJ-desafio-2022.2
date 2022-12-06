import membros from "../models/Membro";

class membrosController {

    static listarMemmbros = (req, res) => {
        membros.find()
            .populate('departamentos')
            .populate('cargos')
            .exec((err, membros) => {
                res.status(200).json(membros)
            })
    }

    static getMembrosbyId = (req, res) => {
        const { id } = req.params;

        membros.findById(id)
            .populate('departamentos')
            .populate('cargos')
            .exec((req, res) => {
            if (err) {
                res.status(400).send({ messege: `${err.messsage} - Id incorreto` });
            }else{
                res.status(200).send(membros);
            }
        })
    }

    static cadastrarMembro =  (req, res) => {
        let membro = new membros.$where(req.body);

        membro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar novo membro`});
            }else{
                res.status(201).send(livro.toJSON());
            }
        })
    }

    

}

export default membrosController;