const passengersRoutes = require("./routes/passengers.js");
const flightsRoutes = require("./routes/flights.js");
const teamRoutes = require("./routes/team.js");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
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
//new routers
app.use("/api/flights", flightsRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/passengers", passengersRoutes);

// starting the server
connectDB().then(() => {
  app.listen(app.get("port"), () => {
    console.log(`App listening on port ${app.get("port")}`);
  });
});
