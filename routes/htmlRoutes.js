const { appendFile } = require('fs')
const path = require('path')
const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

appendFile.get('/', (req, res) => res.send(''))

module.exports = router;