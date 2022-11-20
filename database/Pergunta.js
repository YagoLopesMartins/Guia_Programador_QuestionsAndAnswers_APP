const Sequelize = require("sequelize")
const connection = require("./database")


const Pergunta = connection.define('pergunta',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({force: false})
.then(() => {
console.log("Tabela perguntas criada!")
})


module.exports = Pergunta




