import express from "express";
import "dotenv/config";
import productRouter from "./routes/productRouter";
import { PORT } from "./constants/env";
import errorHandler from "./middlewares/errorHandler";
import db from "./database/db";

const app = express();

// Middlewares

// Routes
app.use("/api/products", productRouter);
app.use(errorHandler);

db.connect((error) => {
  if (error) {
    throw new Error("Failed to connect to database", error);
  }
  console.log("Database successfully connected");
});
app.listen(PORT, () => console.log(`Server is running on port 9500`));
