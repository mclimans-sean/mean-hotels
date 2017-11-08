require('./api/data/dbconnection.js').open();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./api/routes');

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', routes);

const server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Listening on port ' + port);
});
