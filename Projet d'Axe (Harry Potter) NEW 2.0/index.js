const ip = require("ip") //----------------

const express = require("express");
const cors = require("cors");
const routes = require("./routes/start");
const app = express();
const port = 3000;
const ipAddr = ip.address(); //--------------------------

let lastHouseVisited = "Gryffondor"; //---------------------------------
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.get("/", (req, res) => { //-------------------------------------
  res.json({ message: lastHouseVisited }); //--------------------------------------------
}) //-----------

app.post("/", (req, res) => { //------------------------------------
  lastHouseVisited = req.body.house; //--------------------------------
  res.json({ message: lastHouseVisited }) //----------------------------------
}); //-----------

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log("Server run: http://" + ipAddr + ":3000"); //-------------------------------
}); //------------------------------------------
