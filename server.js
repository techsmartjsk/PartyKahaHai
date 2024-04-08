require("dotenv").config();
const swaggerDocs = require("./swagger");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.router");
const partyRoutes = require("./routes/party.router");
const requestRoutes = require("./routes/request.router");
const reportRoutes = require("./routes/report.router");
const PORT = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const DB = process.env.MONGO_DB_URL;
const cors = require("cors");

mongoose
  .connect(DB)
  .catch((error) => console.error("MongoDB connection error:", error));

const app = express();
const corsOptions = {
  credentials:true,
  origin:"http://localhost:3000"
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/auth", authRoutes);
app.use("/party", partyRoutes);
app.use("/request", requestRoutes);
app.use("/report", reportRoutes);

app.options("*", cors(corsOptions))

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
});
