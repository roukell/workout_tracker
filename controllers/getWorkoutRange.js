const db = require("../models");

module.exports = async (req, res) => {
    await db.exercises.find({})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json(err);
        });
};