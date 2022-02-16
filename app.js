const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./controllers/authController")

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

const dbURI="mongodb://localhost:27017/example";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true, userCreateIndex: true})
 .then((result) => app.listen(3000))
 .catch((err) => console.log(err));

 app.get("/", (req, res) => res.render("index"));
 //app.get("/smoothies",)
 app.use(authRoutes);