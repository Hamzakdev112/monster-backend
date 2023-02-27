const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const multer = require("../middleware/multer");
const { verifyUser } = require("../middleware/auth");
const passport = require("../controllers/passport");
const multers = require("../middleware/multer");

router.put("/upload/:id", multers, userController.uploadImage);

router.put("/sample/:userType", verifyUser, userController.userLevel);

//Auth
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);

//Update Profile Picture
router.put("/updateprofile/:id", multer, userController.uploadImage);

//UPDATE USER LEVEL
router.put("/level/:userType", verifyUser, userController.userLevel);

//GET ALL USERS
router.get("/all", userController.getAllUsers);

//Change password

router.put("/changepassword", verifyUser, userController.updatePassword);

//Passport authentication
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/");
  }
);

router.get("/", (req, res) => {
  if (req.user) {
    res.send(`Welcome ${req.user.displayName}!`);
  } else {
    res.send("Hello world!");
  }
});

module.exports = router;
