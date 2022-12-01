const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev"),
      {
        useNewUrlParser: true,
        useUnifedTopology: true,
        useCreateIndex: true,
      };
    console.log("Connect DB successfully");
  } catch (error) {
    console.log("Connect DB failed");
  }
}

module.exports = { connect };
