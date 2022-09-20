
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')


const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.port || 3000



app.get('/', async (req, res) => {
    res.render('index')
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)



app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('Server is running on port: ', port)
    }
})