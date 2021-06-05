const router = require("express").Router();
let User = require("../models/users.model");
const passport = require("passport");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Errro" + err));
});

router.get(
  "/login/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
  (req, res, next) => {}
);

router.get(
  "/auth/google/callback",

  passport.authenticate("google"),
  function (req, res) {
    res.redirect("http://localhost:3000/test-exercise");
    // res.render("profile", { user: req.user });
  }
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added succesfully"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.paramsid)
    .then(() => res.json("user deleted succesfully"))
    .catch((err) => res.status(401).json("Error:" + err));
});
module.exports = router;
