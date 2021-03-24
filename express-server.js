import express from "express";
import mongoose from "mongoose";
const app = express();
const port = 8080;

app.listen(port, () => {
  console.log("Express server is listening on port: ", port);
});

app.get("/", (req, res) => res.send("Ha"));

app.get("/api/hey", (req, res) => {
  console.log(req);
  res.send("ho!");
});

mongoose.connect("mongodb://localhost:27017/newTestDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected to mongodb");
  const kittySchema = new mongoose.Schema({ name: String });
  const Kitten = mongoose.model("kitten", kittySchema);
  const silence = new Kitten({ name: "silence" });
  // silence.save((err, silence) => console.log(err, silence));
  
});
