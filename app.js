const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes.js");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

routes(app);

const server = app.listen(port, () => {
  console.log("app running on port.", port);
});