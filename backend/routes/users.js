//express router
const router = require("express").Router();
//mongoose model
let User = require("../models/users.model");

// first endpoint that handles incoming http url path
router.route("/").get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const username = req.body.username;

    //creates new instance of user
    const newUser = new User({ username });

    newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
