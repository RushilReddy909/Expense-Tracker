import { Schema, model } from "mongoose";

const transactionSchema = new Schema(
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

const transactionModel = model("transactions", transactionSchema);
export default transactionModel;
