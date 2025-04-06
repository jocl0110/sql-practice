import express from "express";
import "dotenv/config";
import productRouter from "./routes/productRouter";
import { PORT } from "./constants/env";
import errorHandler from "./middlewares/errorHandler";
import recipesRouter from "./routes/recipeRouter";
import db from "./database/db";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/store/products", productRouter);
app.use("/store/recipes", recipesRouter);
app.use(errorHandler);
db.then(() => {
  console.log("Connected to the database successfully.");
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
}).catch((error) => {
  console.error("Database connection error:", error);
  process.exit(1);
});
