const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: {
      type: String,
      required: [true, 'goal name is mandatory']
  },
  category: {
      type: String,
      required: [true, 'goal category is mandatory']
  },
  description: {
      type: String
  },
  submissionDate: {
      type: Date
  },
  location: {
      type: String
  }
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;