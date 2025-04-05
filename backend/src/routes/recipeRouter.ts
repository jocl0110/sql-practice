import express from "express";
import {
  createRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
} from "../controllers/recipeController";

const recipesRouter = express.Router();

recipesRouter.get("/", getAllRecipes);
recipesRouter.get("/:id", getRecipeById);
recipesRouter.post("/", createRecipe);
recipesRouter.put("/:id", updateRecipe);
recipesRouter.delete("/:id", deleteRecipe);

export default recipesRouter;
