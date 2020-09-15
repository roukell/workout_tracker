const db = require("../models");
// const moment = require('moment');
// const today = moment().format("MMM Do YY");

module.exports = async (req, res) => {
    // db.day.update({
    //     day: today
    // }, {
    //     $push: {
    //         exercises: req.params.id
    //     }
    // }, {
    //     upsert: true
    // });

    const workout = await db.exercises.findById(req.params.id);
    workout.update(req.body, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}