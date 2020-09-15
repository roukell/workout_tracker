const db = require("../models");
const moment = require('moment');
const { exercises } = require("../models");
const today = moment().format("MMM Do YY");

module.exports = async (req , res) => {
    const exercise = await db.exercises.create(req.body);

    await db.days.findOneAndUpdate({ day: today }, { $push: { exercises: exercise._id } }, { new: true })
    res.json(exercise)
};