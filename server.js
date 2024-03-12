const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const DataModel = require("./DataModel");
const connectDB = require("./Database");
connectDB();

const app = express();
app.use(express.json({ extended: false }));

const cors = require("cors");
app.use(cors());

app.get("/readfromserver", (req, res) => {
  res.json({ message: "this is the server" });
});
app.post("/writetodatabase", async (req, res) => {
  try {
    const { content } = req.body;
    const newData = new DataModel({ content });
    await newData.save();
    res.json({ message: "Data saved successfuly" });
  } catch (error) {
    console.log("this is error!", error.message);
    res.status(500).send("Server error while saving data");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
