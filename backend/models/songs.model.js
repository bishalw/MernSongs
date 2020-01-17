//require mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const songsSchema = new Schema(
  {
    username: { type: String, required: true },
    singer: { type: String, required: true },
    genre: { type: String, required: true },
    songName: { type: String, required: true },
    album: { type: String, required: true }
  },
  {
    timestamps: true
  }
);
const Songs = mongoose.model("Songs", songsSchema);

module.exports = Songs;
