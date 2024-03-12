const mongoose = require("mongoose");
const DataScema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("DataModel", DataScema);
