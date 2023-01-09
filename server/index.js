const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const db = require("./routes/db");

app.use(cors());
app.use(express.json());

//database route
app.use("/api", db);

app.listen(8000, () => {
  console.log("Server listening on 8000");
});
