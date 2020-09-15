const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");
const db = require("./models");
const moment = require("moment");
const today = moment().format("MMM Do YY");
const indexController = require("./controllers/index");
const exerciseController = require("./controllers/exercise");
const statsController = require("./controllers/stats");
const addExercise = require("./controllers/addExercise");
const createExercise = require("./controllers/createExercise");
const getWorkoutRange = require("./controllers/getWorkoutRange");

const app = new express();
const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.set("view engine", "ejs");
app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my_database", {
  useNewUrlParser: true
});

db.days.create({
    day: today
  })
  .then(result => {
    console.log(result);
  })
  .catch(({
    message
  }) => {
    console.log(message);
  });


app.get("/", indexController);
app.get("/exercise", exerciseController);
app.post("/api/workouts", createExercise);
app.put("/api/workouts/:id", addExercise);
app.get("/stats", statsController);
app.get("/api/workouts/range", getWorkoutRange);
app.get("/api/workouts", getWorkoutRange);

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});