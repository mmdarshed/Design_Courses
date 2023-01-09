const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const User = require("./models/users");

mongoose.connect(
  "mongodb+srv://arshed:arshed1234@cluster0.oagci.mongodb.net/test"
);

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  try {
    const user = await User.create({
      user_id: req.body.name,
      email: req.body.email,
    });
    res.json({ status: "OK", userData: user });
  } catch (error) {
    res.json({ status: "OK" });
  }
});

app.listen(8000, () => {
  console.log("Server listening on 8000");
});
