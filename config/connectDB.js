const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Server running on port ${mongoose.connection.host}`.bgWhite.white
    );
  } catch (error) {
    console.log(`${error}`.bgRed);
  }
};

module.exports = connectDB;
