// requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// uses
app.use(bodyParser.urlencoded({extended: true}));
// look in server/public first
app.use(express.static('server/public'));

// variables
const PORT = 4567;

// spin up server
app.listen(PORT, (req, res) => {
    console.log('Server up on port', PORT);
}); // end spin up server