const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
    day: {
        type: String,
        unique: true
    },
    exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: "exercises",
          unique: true
        }
      ]
});

const days = mongoose.model("days", daySchema);

module.exports = days;