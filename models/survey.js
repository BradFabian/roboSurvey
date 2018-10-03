const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  name: { type: String, required: true },
  survey: [
      {
          question: String,
          answers:[String],
          correctanswer: Number
      }
  ],
  date: { type: Date, default: Date.now }
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
