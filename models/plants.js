const mongoose = require("mongoose");
const { Schema } = mongoose;

const plantSchema = new Schema( {
  image: {
    filename: String,
  },
  name: String,
  water: {
    type: String,
    enum: ["sparingly", "as needed", "often"]
  },
  // reminder: Boolean,
  light: {
    type: String,
    enum: ["low", "medium", "bright, indirect", "bright, direct"] 
  },
  fertilize: {
    type: String,
    enum: ["monthly", "quarterly", "annually"],
  },
  datePlanted: Date,
  notes: String
});

module.exports = mongoose.model("Plant", plantSchema)