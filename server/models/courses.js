const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  course_id: { type: String },
  name: { type: String },
  slug: { type: String },
  is_active: { type: Boolean },
  created_on: { type: Date, default: Date.now },
  end_date: { type: Date },
});

const course = mongoose.model("CourseData", Course);

module.exports = course;
