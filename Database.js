require("dotenv").config();
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("mongoDB error:", error.message);
  }
};
module.exports = connectDB;
