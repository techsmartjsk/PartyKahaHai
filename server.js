require("dotenv").config();
var cors = require('cors')
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.router");
const partyRoutes = require("./routes/party.router");
const requestRoutes = require("./routes/request.router");
const reportRoutes = require("./routes/report.router");
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const DB = process.env.MONGO_DB_URL;

mongoose
  .connect(DB)
  .catch((error) => console.error("MongoDB connection error:", error));

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use("/auth", authRoutes);
app.use("/party", partyRoutes);
app.use("/request", requestRoutes);
app.use("/report", reportRoutes);

app.listen(PORT);
