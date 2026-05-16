import express from "express";
import cors from "cors";
import schedulerRoutes from "./routes/schedulerRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    message: "Vehicle Maintenance Scheduler Running",
  });
});

app.use("/api", schedulerRoutes);

export default app;