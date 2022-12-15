import cargos from "../models/Cargo";

class cargosController {

    static listarCargos = (req, res) => {
        cargos.find((err, cargos) => {
            res.status(200).json(cargos);
        })
    }

    static getCargosById = (req, res) => {
        const { id } = req.params;

        cargos.findById(id, (req, res) => {
                if (err) {
                    res.status(400).send({ messege: `${err.messsage} - Id incorreto` });
                } else {
                    res.status(200).send(cargos);
                }
            })
    }

    static cadastrarCargo = (req, res) => {
        let cargo = new cargos(req.body);

        cargo.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo cargo` });
            } else {
                res.status(201).send(cargo.toJSON());
            }
        })
    }

    static atulizarCargo = (req, res) => {
        const { id } = req.params;

       cargos.findByIdAndUpdate(id, req.body), (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: 'Cargo atualizado com sucesso' })
            }
        }
    }

    static excluirCargo = (req, res) => {
        const {id} = req.params;

        cargos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: 'Cargo removido com sucesso' })
            }
        })
    }
    
}

export default cargosController;