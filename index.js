const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');

const app = express();

let posts = [
    {
        id: "hsgjdhsa",
        title: "Teste do Mural",
        description: "Descrição teste"
    },
]

app.get("/all", (req, res) => { 

    res.json(JSON.stringify(posts))

});

app.post("/new", bodyParser.json(), (req, res) => { 
    let id = generateID();
    let title = req.body.title;
    let desscription = req.body.description;

    posts.push({id, title, desscription})

    res.send("Post adicionado");

});

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})

function generateID(){
    return Math.random().toString(36).substr(2, 9);
}