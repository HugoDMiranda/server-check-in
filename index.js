const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PassengersModel = require("./models/Passengers");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
const origin = ["", "http://localhost:3000"];

app.use(
  cors({
    origin: origin,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.set("port", process.env.PORT || 3001);

mongoose.connect(
  "mongodb://mongo:kWa0UAbKPyz6T7Fq3C0p@containers-us-west-204.railway.app:7329"
);

app.get("/passengers", async (req, res) => {
  try {
    const result = await PassengersModel.find({});
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.get("/passenger", async (req, res) => {
  try {
    const result = await PassengersModel.find({ name: req.body.name });
    res.json(req.body.name);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/checkin", async (req, res) => {
  const passenger = req.body;
  const newPassanger = new PassengersModel(passenger);
  await newPassanger.save();

  res.json(passenger);
});

// starting the server
app.listen(app.get("port"), () => {
  console.log(`App listening on port ${app.get("port")}`);
});
