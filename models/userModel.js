const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is not Specified"],
    },
    email: {
      type: String,
      required: [true, "Email is not Specified"],
      unique: [true, "Email must be unique"],
    },
    password: {
      type: String,
      required: [true, "Password is not Specified"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
