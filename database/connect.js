const mongoose = require("mongoose");
const errorHandling = require("../lib/errorsHandling");
const mongoDBURL = require("config").get("mongoURL");
const chalk = require("chalk")

module.exports = async () => {
  if (mongoDBURL === "" || mongoDBURL === null || mongoDBURL === undefined)
    return console.log("database:", `No Connection`);

  try {
    let conn = await mongoose.connect(mongoDBURL);
    console.log(chalk.blue("database:"), `${conn.connection.host}`);
  } catch (error) {
    mongoose.connection.close(() => {
      console.error(
        chalk.bold.red("Error"),
        errorHandling({
          errors: [error],
          message: "Mongoose connection disconnected",
          status: 500,
        })
      );
    });
  }
};
