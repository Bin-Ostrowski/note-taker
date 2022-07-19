const router = require('express').Router()
const { readFile, appendToJson } =  require('../utils')

router.get('/notes', (req, res)=>{
readFile('./db/db.json').then((data)=> res.json(JSON.parse(data)))
})

router.post('/notes', (req, res)=>{
appendToJson(req.body, './db/db.json')
res.json('note has been added')
})

module.exports = router;