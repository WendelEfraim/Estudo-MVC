const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')

const tasksRoutes = require('./routes/tasksRoutes')

app.set('views', `${__dirname}/views`)
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
      extended:true,
    }),
)

app.use(express.json())

app.use('',tasksRoutes)

// app.use(express.static('public'))

conn.sync()
.then(()=>{
    app.listen(3000) 
    console.log('APP STARTED ON PORT 3000')
}).catch((err) => console.log(err))