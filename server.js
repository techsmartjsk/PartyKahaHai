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

const corsOptions = {
  origin: ["http://localhost:3000"], //(https://your-client-app.com)
  optionsSuccessStatus: 200,
};
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/auth", authRoutes);
app.use("/party", partyRoutes);
app.use("/request", requestRoutes);
app.use("/report", reportRoutes);

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
});
