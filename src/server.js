import express from 'express'
import db from "./config/dpConnect.js"
import cors from "cors";
import membros from './models/Membro.js';
import departamentos from './models/Departamento.js';
import cargos from './models/Cargo.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*"
}));


app.get('/', (req, res) => {
  console.log("GET /");
  res.status(200).send("Hello World");
});

app.listen('3333', () => {
  console.log("O servidor foi inicializado em http://localhost:3333");
});





db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco concluida');
})





