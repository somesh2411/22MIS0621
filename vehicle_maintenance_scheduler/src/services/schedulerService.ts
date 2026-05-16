import { solveKnapsack } from "../utils/knapsack";

interface VehicleTask {
  taskId: string;
  duration: number;
  impact: number;
}

export function getOptimizedSchedule(
  tasks: VehicleTask[],
  mechanicHours: number
) {
  return solveKnapsack(tasks, mechanicHours);
}