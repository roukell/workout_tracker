const Workout = require("../models/Workout");

module.exports = async (req, res) => {
    await Workout.create(req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}