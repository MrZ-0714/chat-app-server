const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

app.listen(port, () => {
  console.log("Express server is listening on port: ", port);
});

app.get("/", (req, res) => res.send("Ha"));

app.get("/api/hey", (req, res) => {
  console.log(req);
  res.send("ho!");
});

await mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});