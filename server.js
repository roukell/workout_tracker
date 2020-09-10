const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const indexController = require("./controllers/index");
const exerciseController = require("./controllers/exercise");
const statsController = require("./controllers/stats");

const app = new express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", indexController);
app.get("/exercise", exerciseController);



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
