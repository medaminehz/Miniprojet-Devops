const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const routesPath = path.join(__dirname, 'routes.js');
const routes= require(routesPath);
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.set('view engine', 'ejs');

const dbURI ='mongodb+srv://mohamedamineharzallah:aminehz@devops.hb9p1gm.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3006))
  .catch((err) => console.log(err));



app.use(routes);