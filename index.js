const express = require("express")
const bodyParser = require("body-parser")
const connection = require("./database/database")
const PerguntaModelDB = require("./database/Pergunta")

// try {
//     await connection.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }

connection.authenticate()
    .then(() =>{
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    })

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get("/", (req, res) =>{

    PerguntaModelDB.findAll({ raw: true})
    .then((perguntas) =>{
        res.render("index", { 
            perguntas: perguntas 
        })
    })
    .catch((error) => {
        console.error('Error: ', error);
    })

    // var name = "Yago"
    // res.send("Bem vindo")
    // res.render("index", { name:name, language: "JS" })
})

app.post("/salvarpergunta", (req, res) =>{
    var titulo  = req.body.titulo
    var descricao  = req.body.descricao

    PerguntaModelDB.create({
        titulo: titulo,
        descricao: descricao
    }).then(() =>{
        res.redirect("/")
    })
    .catch((error) => {
        console.error('Error: ', error);
    })
    // console.log(titulo + " - " + descricao)
})



app.listen(8080, ()=> {console.log("App executando...")})