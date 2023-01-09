const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("../models/users");
const Course = require("../models/courses");

const db = express();
mongoose.connect(process.env.MONGO_URI);

db.use(cors());
db.use(express.json());

db.post("/registerUser", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      is_active: req.body.active,
    });
    res.json({ status: 200, message: `User Created with details \n${user}` });
  } catch (error) {
    res.json({ status: 400, message: error.message, error: error.stack });
  }
});

db.post("/registerCourse", async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      is_active: req.body.active,
      end_date: req.body.endDate,
    });
    res.json({
      status: 200,
      message: `Course Registered with details \n${course}`,
    });
  } catch (error) {
    res.json({ status: 400, message: error.message, error: error.stack });
  }
});

module.exports = db;
