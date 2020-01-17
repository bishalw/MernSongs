// use express  cors & mongoose
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// configures have environment variable in env file
require("dotenv").config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

//cors middleware to parse json
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");
const songsRouter = require("./routes/songs");

//loads what is in the router

app.use("/users", usersRouter);
app.use("/songs", songsRouter);

//starts listening on port
app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
