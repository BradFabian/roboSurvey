var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var evalSchema = new Schema({
    userId: ObjectId,
    surveys: [],
    date: { type: Date, default: Date.now }
});

var Evaluation = mongoose.model("Evaluation", evalSchema);

module.exports = Evaluation;
