const fs =  require('fs');
const util = require('util')

const readFile = util.promisify(fs.readFile);

const writeToFile =(path, content)=> {
fs.writeFile(path, JSON.stringify(content), (err)=> {
    if(err){
        console.log(err)
    }else{
        console.log("data has been written");
    }
})
}

const appendToJson = (content, file)=> {
    fs.readFile(file, 'utf8', (err, data)=> {
        if(err){
            console.log(err)
        }else{
            const parsedNotes = JSON.parse(data);
            parsedNotes.push(content)
            writeToFile(file, parsedNotes)
        }
    })
}

module.exports = { readFile, appendToJson }