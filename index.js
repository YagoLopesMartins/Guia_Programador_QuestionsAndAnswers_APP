const express = require("express")

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get("/", (req, res) =>{

    var name = "Yago"

    // res.send("Bem vindo")
    res.render("index", { name:name, language: "JS" })
})


app.listen(8080, ()=> {console.log("App executando...")})