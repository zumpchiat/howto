const api = require('../api')
const express = require('express')
const router = express.Router()

router.post('/nova', async (req, res) => {
    await api.create('categorias', {
        categorias: req.body.categorias
    })
    res.redirect('/categorias')
})

router.get('', async (req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', { categorias })
})

router.get('/excluir/:id', async (req, res) => {
    await api.apagar('categorias', req.params.id)
    res.redirect('/categorias')
})


router.get('/editar/:id', async (req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    res.render('categorias/editar', {
        categoria
    })
})

router.post('/editar/:id', async (req, res) => {
    await api.update('categorias', req.params.id, {
        categorias: req.body.categorias
    })
    res.redirect('/categorias')
})


module.exports = router
