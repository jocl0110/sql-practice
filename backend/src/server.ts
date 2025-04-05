import express from "express";
import "dotenv/config";
import productRouter from "./routes/productRouter";
import { PORT } from "./constants/env";
import errorHandler from "./middlewares/errorHandler";
import db from "./database/db";
import recipesRouter from "./routes/recipeRouter";

const app = express();

// Middlewares

// Routes
app.use("/store/products", productRouter);
app.use("/store/recipes", recipesRouter);
app.use(errorHandler);

db.connect((error) => {
  if (error) {
    throw new Error("Failed to connect to database", error);
  }
  console.log("Database successfully connected");
});
app.listen(PORT, () => console.log(`Server is running on port 9500`));
