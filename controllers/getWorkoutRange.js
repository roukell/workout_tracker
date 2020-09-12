const Workout = require("../models/Workout");

module.exports = async (req, res) => {
    await Workout.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    });
}