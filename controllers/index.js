const db = require("../models");

module.exports = async (req, res) => {
    await db.exercises.find({}, (err, data) => {
        if (err) {
            res.send(err);
        } else {
            res.render("index", { data });
        }
    });
}