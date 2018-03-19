// requires
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let calculate = require('./modules/calculate.js')
let mostRecentAnswer = 0;
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

app.post('/doMath', (req, res) =>{
    console.log('in /doMath POST', req.body);
    mostRecentAnswer = calculate(req.body);
    console.log(mostRecentAnswer);
    res.send('meow');
}); // end doMath POST
app.get('/doMath', (req, res) =>{
    res.send({answer: mostRecentAnswer});
}); // end /answer GET