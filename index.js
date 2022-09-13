const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const categorias = require('./routes/categorias')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
const port = process.env.port || 3000

let i = ''
const resolver = async (request, response) => {
    const content = await axios.get(' ')
    response.render('index', { i: content.data })
}

app.get('/', resolver)

app.get('/categorias/nova', (req, res) => {
    res.render('categorias/nova')
})

app.use('/categorias', categorias)

app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('Server is running on port: ', port)
    }
})