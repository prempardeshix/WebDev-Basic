const mongoose = require("mongoose");
require("dotenv").config();

function dbConnect() {
  mongoose
    .connect(process.env.DATABASSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection successful");
    })
    .catch((error) => {
      console.log("error occured");
      console.log(error.message);
      process.exit(1);
    });
}

module.exports = dbConnect;
