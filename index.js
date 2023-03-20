const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./app/routes/userRoutes");

const app = express();
const port = 3000;

// configure middleware
app.set("view engine", "ejs");
app.set("views", [__dirname + "/app" + "/views"]);
app.use(bodyParser.urlencoded({ extended: false }));

// configure routes
app.use("/", userRoutes);

// start server
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
