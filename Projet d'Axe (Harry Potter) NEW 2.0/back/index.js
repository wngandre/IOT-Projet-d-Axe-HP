import express from "express";
import router from "./routes/start.js";
import cors from "cors";
import bodyParser from "body-parser";
import ip from "ip";

const app = express();
const ipAdress = ip.address();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(port, () => {
    console.log(`Server run : http://` + ip.address() + `:3000`);
});

app.get('/', (req, res) => {
  res.send('Hello from the back-end!');
});

app.get('/agents', (req, res) => {
  res.send([
    'Jett',
    'Phoenix',
    'Sova',
    'Brimstone',
    'Viper',
    'Omen',
    'Killjoy',
    'Cypher',
    'Reyna',
    'Sage',
    'Breach',
    'Skye',
    'Raze',
    'Yoru',
    'Astra',
    'KAY/O',
    'Chamber',
    'Neon',
    'Fade',
    'Harbor',
    'Gekko',
    'Deadlock',
    'Clove'
  ])
});