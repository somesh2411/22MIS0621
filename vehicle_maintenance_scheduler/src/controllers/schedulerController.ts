import { Request, Response } from "express";
import { getOptimizedSchedule } from "../services/schedulerService";

export function optimizeSchedule(
  req: Request,
  res: Response
) {
  try {
    const { mechanicHours, vehicles } = req.body;

    if (!mechanicHours || !vehicles) {
      return res.status(400).json({
        message: "Invalid request body",
      });
    }

    const result = getOptimizedSchedule(
      vehicles,
      mechanicHours
    );

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}