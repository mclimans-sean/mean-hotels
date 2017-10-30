const express = require('express');
const app = express();

app.set('port', 3000);

const server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Lisening on port ' + port);
});
