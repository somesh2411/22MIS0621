interface VehicleTask {
  taskId: string;
  duration: number;
  impact: number;
}

export function solveKnapsack(
  tasks: VehicleTask[],
  maxHours: number
) {
  const n = tasks.length;

  const dp: number[][] = Array.from(
    { length: n + 1 },
    () => Array(maxHours + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const { duration, impact } = tasks[i - 1];

    for (let w = 0; w <= maxHours; w++) {
      if (duration <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          impact + dp[i - 1][w - duration]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  let w = maxHours;
  const selectedTasks: VehicleTask[] = [];

  for (let i = n; i > 0; i--) {
    if (dp[i][w] !== dp[i - 1][w]) {
      selectedTasks.push(tasks[i - 1]);
      w -= tasks[i - 1].duration;
    }
  }

  return {
    selectedTasks: selectedTasks.reverse(),
    totalImpact: dp[n][maxHours],
  };
}