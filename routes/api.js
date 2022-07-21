const router = require('express').Router()
const { readFile, appendToJson } =  require('../utils')
var uniqid = require('uniqid');


// GET all notes
router.get('/notes', (req, res)=>{
readFile('./db/db.json').then((data)=> res.json(JSON.parse(data)))
})

// POST new notes
router.post('/notes', (req, res)=>{
    //give unique Id
    req.body.id = uniqid();
    //add to notes array
    appendToJson(req.body, './db/db.json')
    res.json(console.log ('note has been added'))
});

// Delete notes
router.delete('/notes/:id', (req, res) => {
    const params = [req.params.id];
    console.log(params);

    //read db file
    // readFile('./db/db.json').then((data)=> res.json(data))
    // console.log(data);

    //filter to find id

    //rewrite the notes to the db.json file.
});

module.exports = router;