const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


// ------ End Points ------ //



// ------ Server Listening ------ //
app.listen(3005, () => {
    console.log('Server is live on port 3005');
})