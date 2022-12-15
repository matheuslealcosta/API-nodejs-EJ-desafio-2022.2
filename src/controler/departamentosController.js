import departamentos from "../models/Departamento.js";

class departamentosController{

    static listarDepartamentos = (req, res) => {
        departamentos.find((err, departamentos) => {
            res.status(200).json(departamentos);
        })
    }

    static getDepartamentosById = (req, res) => {
        const { id } = req.params;

        departamentos.findById(id, (req, res) => {
                if (err) {
                    res.status(400).send({ messege: `${err.messsage} - Id incorreto` });
                } else {
                    res.status(200).send(departamentos);
                }
            })
    }

    static cadastrarDepartamento = (req, res) => {
        let departamento = new departamentos(req.body);

        departamento.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar novo Departamento` });
            } else {
                res.status(201).send(departamento.toJSON());
            }
        })
    }

    static atulizarDepartamento = (req, res) => {
        const { id } = req.params;

       departamentos.findByIdAndUpdate(id, req.body), (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: 'Departamento atualizado com sucesso' })
            }
        }
    }

    static excluirDepartamento = (req, res) => {
        const {id} = req.params;

        departamentos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({ message: err.message })
            } else {
                res.status(200).send({ message: 'Departamento removido com sucesso' })
            }
        })
    }
    
}


export default departamentosController;