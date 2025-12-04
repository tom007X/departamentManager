const {entidades} = require( './entidades.js');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("Hola desde Express!");
});

app.get("/departamento", (req,res) => {
    res.json(entidades)
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
