const express = require("express");
const socket = require("socket.io");
const app = express();
const http = require("http").createServer(app);
const io = socket(http);

const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("A user connected");
  io.emit("chat message", "You are connected to server");

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.emit("chat message", "A user discounnected");
  });

  socket.on("chat message", (msg) => {
    console.log("Chat message is ", msg);
    io.emit("chat message", msg);
  });
});

http.listen(port, () => {
  console.log("listening on *: ", port);
});

// app.get("/", (req, res) => res.send("Ha"));

// app.get("/api/hey", (req, res) => {
//   res.send("ho!");
// });

// import mongoose from "mongoose";
// mongoose.connect("mongodb://localhost:27017/newTestDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", () => {
//   console.log("Connected to mongodb");
//   const kittySchema = new mongoose.Schema({ name: String });
//   const Kitten = mongoose.model("kitten", kittySchema);
//   const silence = new Kitten({ name: "silence" });
//   // silence.save((err, silence) => console.log(err, silence));
// });
