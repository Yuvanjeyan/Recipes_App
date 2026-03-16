const mongoose = require("mongoose");

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/recipe_crud";
  await mongoose.connect(mongoURI);
  console.log("MongoDB connected");
};

module.exports = connectDB;
