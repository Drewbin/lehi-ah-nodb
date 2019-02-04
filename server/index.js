const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let characters = [];


// ------ End Points ------ //
app.post('/create', (req, res) => {
    if(characters.length == 0){
        characters.push(req.body);
    }
    res.status(200).send(characters);
})

app.delete('/remove/:id', (req, res) => {
    let {id} = req.params;
    characters.splice(id, 1);
    res.status(200).send(characters);
})


// ------ Server Listening ------ //
app.listen(3005, () => {
    console.log('Server is live on port 3005');
})