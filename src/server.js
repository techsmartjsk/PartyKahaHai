import express from "express";
import swaggerDocs from "./swagger.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import PartyRouter from "./routes/party.router.js";
import RequestRouter from "./routes/request.router.js";
import AuthRouter from "./routes/auth.router.js";
import dotenv from "dotenv";
import ReportRouter from "./routes/report.router.js";
import UserRouter from "./routes/user.router.js";
import VibeRouter from "./routes/vibe.router.js"

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB = process.env.MONGO_DB_URL;

mongoose
  .connect(DB)
  .catch((error) => console.error("MongoDB connection error:", error));

const app = express();

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/users", UserRouter);
app.use("/auth", AuthRouter);
app.use("/party", PartyRouter);
app.use("/request", RequestRouter);
app.use("/report", ReportRouter);
app.use("/vibe", VibeRouter);

app.options("*", cors(corsOptions));

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
  console.log(`Server running on port ${PORT}`);
});

export default app;
