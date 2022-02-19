const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');

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

app.post("/new", (req, ress) => { });

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})