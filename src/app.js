import express from 'express'
import db from "./config/dpConnect.js"
import cors from "cors";
import membros from './models/Membro.js';
import departamentos from './models/Departamento.js';
import cargos from './models/Cargo.js';
import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors({
  origin: "*"
}));


app.get('/', (req, res) => {
  console.log("GET /");
  res.status(200).send("Hello World");
});



db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com o banco concluida');
})

routes(app);