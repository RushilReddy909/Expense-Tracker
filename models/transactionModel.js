const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: [true, "Amount should be specified"],
    },

    type: {
      type: String,
      required: [true, "Type is required"],
    },

    category: {
      type: String,
      required: [true, "Category is not mentioned"],
    },

    description: {
      type: String,
    },

    date: {
      type: Date,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports = transactionModel;
