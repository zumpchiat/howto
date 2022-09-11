const { default: axios } = require('axios')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
const port = process.env.port || 3000 


let i = ''
const resolver = async ( request, response) =>{
    const content = await axios.get('https://como-fazer-rzm-default-rtdb.firebaseio.com/teste.json')
    response.render('index', { i: content.data})
}

app.get('/', resolver)

app.get('/categorias/nova', (req, res) =>{
    res.render('categorias/nova')
})

app.post('/categorias/nova', async (req, res) =>{
    await axios.post('https://como-fazer-rzm-default-rtdb.firebaseio.com/categorias.json/', {
        categorias: req.body.categorias
    })
    res.send(req.body)
})

app.get('/categorias', async (req, res) =>{
    const content = await axios.get('https://como-fazer-rzm-default-rtdb.firebaseio.com/categorias.json')
    const categorias = Object.keys(content.data).map(key => content.data[key]) 
    res.render('categorias/index', { categorias: categorias })
})

app.listen(port, (err) => {
    if(err) {
        console.log('error')
    } else {
        console.log('Server is running on port: ', port )
    }
})