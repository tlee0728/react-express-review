
// set up index first. create server.
// then implement controller in server as object
// implement router and then reference it here in index.js so that router will be used.

// ORDER MATTERS
const express = require('express');
const cors = require('cors'); 
const path = require('path');
const router = require('./router');
// 2
const bodyParser = require('body-parser');
const morgan = require('morgan');
//
const app = express();
const port = 3000;

app.use(cors()); // helps with browser security. other people accessing ur browser from another address
app.use(morgan('dev')); // gives you detailed information about what kind of request you sent/response status
app.use(bodyParser.json()); // turns response into a json object.
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(path.join(__dirname, '../client/dist'))); // looks for any file/folder where it has a lot of unchanging/static files. 
//                                                              tells us where our static files are(bundle.js, dist folder!)
// 3
app.use('/', router);
//

// app.get('/name', (req, res) => {
//   res.send('TL');
// })

app.listen(port, () => console.log('Listening to port 3000'));
