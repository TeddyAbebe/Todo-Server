const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const serverless = require("serverless-http");

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Todo Api");
});

app.use("/todo", require("./routes/todo.route"));

module.exports = app;
module.exports.handler = serverless(app);
