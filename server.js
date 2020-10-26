const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

// ENTENDER DIREITO O QUE É RESOURCE

// verbos http
/**
 * GET: receber dados de um resource
 * POST: enviar dados para ser processadas por um resource
 * PUT: atualizar os dados do resource
 * DELETE: deletar um resource
 */

 // http://localhost:3000/clients

app.get("/clients", function (req, res){
    res.json(data);
});
app.get("/clients/:id", function (req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    res.json(client);
});
app.post("/clients", function (req, res){
    const { nome, email } = req.body;

    //salvar

    res.json({ nome, email });
});
app.put("/clients/:id", function (req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);
});
app.delete("/clients/:id", function (req, res){
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id);

    res.json(clientsFiltered);
    
});

app.listen(3000, function () {
    console.log("Servidor rodando")
})