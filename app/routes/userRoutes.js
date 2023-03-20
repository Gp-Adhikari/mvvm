const express = require("express");
const UserViewModel = require("../viewModels/UserViewModel");

const router = express.Router();
const userViewModel = new UserViewModel();

router.get("/", async (req, res) => {
  await userViewModel.fetchUsers();
  res.render("user/index", { users: userViewModel.users });
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  await userViewModel.addUser(name, email, password);
  res.redirect("/users");
});

module.exports = router;
