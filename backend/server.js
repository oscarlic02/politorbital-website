import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import missionRoutes from "./routes/mission.route.js";
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/missions", missionRoutes);

app.listen(5000, () => {
  connectDB();
});
