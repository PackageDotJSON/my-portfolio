const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const path = require('path');
const router = express.Router();

var app = express();

app.disable('x-powered-by');

app.use(express.static(__dirname + '/'));

 app.get('/*', (req, res) => {
   res.sendFile(path.join(__dirname));
 });

app.use(bodyParser.json());

app.use(cors());

router.post('/api/sendEmail', (req, res) => {

    console.log(req.body);
    console.log(req.query);
    console.log(req.ip);
    res.send(200);
});

app.use(router);

var port = process.env.PORT || 5000;

const server = http.createServer(app);

const address = '0.0.0.0';

server.listen(port, address, () => {
    console.log(`Running on port ${port}`);
});
