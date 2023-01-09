const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  course_id: { type: String },
  name: { type: String, required: true },
  is_active: { type: Boolean, required: true },
  created_on: { type: Date, default: Date.now },
  end_date: { type: Date, required: true },
});

const course = mongoose.model("CourseData", Course);

module.exports = course;
