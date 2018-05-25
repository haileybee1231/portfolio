const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
let path = require('path');
const app = express();

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

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('listening on port 8080!');
});
