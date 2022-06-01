const fs = require("fs");
const handlebars = require("handlebars");
const express = require("express");

const app = express();
const port = 80;

const index_template = handlebars.compile(fs.readFileSync("index.hbs", {encoding:'utf8', flag:'r'}));
const nav_template = handlebars.compile(fs.readFileSync("nav.hbs", {encoding:'utf8', flag:'r'}));

app.use('/static', express.static("static"));

app.get('/', (req, res) => {
  var user_data = { "name": "Gary" };
  var nav = { "nav": nav_template(user_data) };
  var result = index_template(nav);
  res.send(result);
});

app.get('/login', (req, res) => {
    res.send('login!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});