const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: string,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model("Collection_name", userSchema);
module.exports = { User };
