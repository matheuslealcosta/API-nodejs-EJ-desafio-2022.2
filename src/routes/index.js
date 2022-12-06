import express from "express"
import membros from "../models/Membro.js"
import departamentos from "../models/Departamento.js"
import cargos from "../models/Cargo.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "API code"})
    })

    app.use(
        express.json(),
        membros,
        departamentos,
        cargos
    )
}

export default routes;