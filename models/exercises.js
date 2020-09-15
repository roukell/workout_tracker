const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    type: String,
    name: String,
    distance: {
        type: Number
    },
    duration: {
        type: Number
    },
    weight: {
        type: Number
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    }
});

const exercises = mongoose.model("exercises", exercisesSchema);

module.exports = exercises;