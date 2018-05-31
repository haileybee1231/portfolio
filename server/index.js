const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
let path = require('path');
const app = express();
const emailHandler = require('./emailhander.js');
require('dotenv').config();

// const http = require('http').Server(app);
// require('../server/config/passport')(passportapp.use(passport.session());
app.use(express.static(path.join(__dirname, '../react-client/dist')));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('*bundle.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
});

app.post('/email', (req, res) => {
  let {name, subject, message, email} = req.body;
  emailHandler.sendEmail(name, subject, message, email);
  res.status(201).end();
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port 8080!');
});
