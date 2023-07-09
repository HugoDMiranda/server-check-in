const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PassengersModel = require("./models/Passengers");
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json());
const origin = ["https://check-in-swart.vercel.app", "http://localhost:3000"];

app.use(
  cors({
    origin: origin,
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
dotenv.config();
app.set("port", process.env.PORT || 3001);

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// mongoose.connect(
//   "mongodb+srv://hdmirandab:13032605@checkin.ptroj34.mongodb.net/?retryWrites=true&w=majority"
// );

app.get("/", async (req, res) => {
  res.send("connect to MONGODB");
});

app.get("/passengers", async (req, res) => {
  try {
    const result = await PassengersModel.find({});
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// app.get("/passenger", async (req, res) => {
//   try {
//     const result = await PassengersModel.find({ name: req.body.name });
//     res.json(req.body.name);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// });

app.post("/checkin", async (req, res) => {
  const passenger = req.body;
  const newPassanger = new PassengersModel(passenger);
  await newPassanger.save();

  res.json(passenger);
});

// starting the server
connectDB().then(() => {
  app.listen(app.get("port"), () => {
    console.log(`App listening on port ${app.get("port")}`);
  });
});
