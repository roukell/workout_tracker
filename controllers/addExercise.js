const Workout = require("../models/Workout");

module.exports = async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    workout.update(req.body, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.json(data);
        }
    })
}