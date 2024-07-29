const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Amount should be specified"],
    },

    category: {
      type: String,
      required: [true, "Category is not mentioned"],
    },

    description: {
      type: String,
    },

    date: {
      type: String,
      required: [true, "Date is required"],
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transactions", transactionSchema);
