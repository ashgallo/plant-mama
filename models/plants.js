const mongoose = require("mongoose");
const { Schema } = mongoose;

const plantSchema = new Schema( {
  image: String,
  name: String,
  water: {
    type: String,
    enum: ["twice a week", "once a week"]
  },
  reminder: Boolean,
  light: {
    type: String,
    enum: ["full", "moderate", "low"] 
  },
  fertilize: {
    type: String,
    enum: ["weekly", "monthly", "seasonaly"],
    lastFertilized: Date
  },
  datePlanted: Date,
  specialInstructions: String
});

module.exports = mongoose.model("Plant", plantSchema)