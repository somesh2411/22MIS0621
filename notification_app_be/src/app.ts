import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    message: "Notification Backend Running",
  });
});

app.get("/api/notifications", (_req, res) => {
  const notifications = [
    {
      id: 1,
      type: "Placement",
      message: "TCS Hiring Drive",
      priority: 10,
    },
    {
      id: 2,
      type: "Result",
      message: "Mid Semester Result Published",
      priority: 8,
    },
  ];

  res.status(200).json({
    notifications,
  });
});

export default app;