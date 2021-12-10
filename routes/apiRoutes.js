
let db = require('../db/db.json')
const router = require('express').Router()
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', (req, res) => {
    res.json(db)
})

router.post('/api/notes', (req, res) => {
    req.body.id = uuidv4()
    console.log(req.body)
    db.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
})

router.delete('/api/notes/:id', (req, res) => {
    console.log(req.params.id)
    console.log(db)
    db = db.filter(note => {
        return note.id != req.params.id
    })
    console.log(db)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
})
module.exports = router;
