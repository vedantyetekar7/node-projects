const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    // mongodb connection string
    const con = await mongoose.connect(process.env.CONNECTION_URL);

    console.log(`MongoDB connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
