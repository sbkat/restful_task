const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.use(express.static( __dirname + '/angular/dist/angular' ));

app.listen(8000, () => console.log("listening on port 8000"));