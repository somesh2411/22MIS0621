import express from "express";
import { optimizeSchedule } from "../controllers/schedulerController";

const router = express.Router();

router.post("/schedule", optimizeSchedule);

export default router;