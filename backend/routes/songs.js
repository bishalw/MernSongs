//express router
const router = require("express").Router();
//mongoose model
let Songs = require("../models/songs.model");

// first endpoint that handles incoming http url path
router.route("/").get((req, res) => {
  Songs.find()
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  //creates new instance of user

  const username = req.body.username;
  const singer = req.body.singer;
  const genre = req.body.genre;
  const songName = req.body.songName;
  const album = req.body.album;

  const newSongs = new Songs({
    username,
    singer,
    genre,
    songName,
    album
  });

  newSongs
    .save()
    .then(() => res.json("Songs added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Songs.findById(req.params.id)
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/:id").delete((req, res) => {
  Songs.findByIdAndDelete(req.params.id)
    .then(songs => res.json("Songs Deleted"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Songs.findById(req.params.id)
    .then(songs => res.json(songs))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/update/id:").post((req, res) => {
  Songs.findById(req.params.id)
    .then(songs => {
      songs.username = req.body.username;
      songs.singer = req.body.singer;
      songs.genre = req.body.genre;
      songs.songName = req.body.songName;
      songs.album = req.body.album;

      songs
        .save()
        .then(() => res.json("Songs Updated"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
