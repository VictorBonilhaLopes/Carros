const express = require('express')
const path = require('path')

const Carros = require('./controllers/carrosController')
const Home = require('./controllers/homeController')

const app = express()

app.listen(8080, () => {
    console.log("Serviço executando, disponivel em http://localhost:8080")
    console.log("Para finalizar, pressione CTRL+C")
})

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded({
    extended: true
}))

app.get('/', Home.home)
app.get('/carros/list', Carros.list)
app.get('/carros/formNew', Carros.formNew)
app.get('/carros/formEdit/:id', Carros.formEdit)
app.post('/carros/create', Carros.create)
app.post('/carros/editar', Carros.edit)
app.get('/carros/deletar/:id', Carros.destroy)
