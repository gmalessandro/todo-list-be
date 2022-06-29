const express = require("express");
const app = express();
const http = require('http');
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors()); //me hace la conexion entre archivos cuando el server recibe la llamada httpclient hacia el angular, y acepta la llamda.

app.get("/gettodo", require('./Moduli/gettodo.js'));
app.post("/insertodo", require('./Moduli/insertvalues.js'));
app.post("/updatetodo", require('./Moduli/update.js'));
app.post("/deleteSingle", require('./Moduli/deleteSingle.js'));
app.post("/deleteItem", require('./Moduli/deleteMultiple.js'));
app.post("/deletememory", require('./Moduli/deletememory.js'));

app.listen(3000, ()=> {
  console.log("Running on port 3000");
});