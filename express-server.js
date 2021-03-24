const express = require("express");
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("Express server is listening on port: ", port);
});

app.get("/", (req, res) => res.send("Ha"));

app.get("/api/hey", (req, res) => res.send("ho!"));
