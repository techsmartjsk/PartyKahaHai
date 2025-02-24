import express from "express";
import swaggerDocs from "./swagger.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { PartyRouter } from "./routes/party.router.js";
import { RequestRouter } from "./routes/request.router.js";
import { AuthRouter } from "./routes/auth.router.js";
import { ReportRouter } from "./routes/report.router.js";
import dotenv from "dotenv";

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

app.use("/auth", AuthRouter);
app.use("/party", PartyRouter);
app.use("/request", RequestRouter);
app.use("/report", ReportRouter);

app.options("*", cors(corsOptions));

app.listen(PORT, () => {
  swaggerDocs(app, PORT);
  console.log(`Server running on port ${PORT}`);
});

export default app;
