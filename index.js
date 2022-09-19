
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')

app.set('views', './views');
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())

const port = process.env.port || 3000



app.get('/', categorias)

app.use('/categorias', categorias)



app.listen(port, (err) => {
    if (err) {
        console.log('error')
    } else {
        console.log('Server is running on port: ', port)
    }
})