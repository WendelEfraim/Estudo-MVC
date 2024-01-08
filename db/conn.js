const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('escola', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try{

    sequelize.authenticate()
    console.log("MYSQL Conectado")

}
catch(err){
    console.log(`Não foi poossivel conectar: ${err}`)

}

module.exports = sequelize