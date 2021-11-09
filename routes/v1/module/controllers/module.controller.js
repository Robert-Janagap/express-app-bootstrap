const moduleService = require("../services/module.service");

exports.getTest = async (req, res) => {
  res.status(200).json({ test: "test" });
};

exports.postTest = async (req, res) => {

  try {
    const text = await moduleService.createTest("text");
  } catch (error) {
    console.log("test", error)
  }

};

exports.getSpecificTest = async (req, res) => {
  res.status(200).json({ test: "test" });
};
