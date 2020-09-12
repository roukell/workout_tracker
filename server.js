const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const indexController = require("./controllers/index");
const exerciseController = require("./controllers/exercise");
const statsController = require("./controllers/stats");
const addExercise = require("./controllers/addExercise");
const createExercise = require("./controllers/createExercise");
const getWorkoutRange = require("./controllers/getWorkoutRange");

const app = new express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", indexController);
app.get("/exercise", exerciseController);
app.get("/stats", statsController);
app.put("/api/workouts/:id", addExercise);
app.post("/api/workouts", createExercise);
app.get("/api/workouts/range", getWorkoutRange);


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/my_database", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});
