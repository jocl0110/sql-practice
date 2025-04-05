import catchErrors from "../utils/catchErrors";

export const getAllRecipes = catchErrors(async (_req, res) => {
  res.json({ message: "Getting all Recipes" });
});
export const getRecipeById = catchErrors(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Getting Recipe with id: ${id}` });
});
export const createRecipe = catchErrors(async (_req, res) => {
  res.status(201).json({
    message: "Creating a new Recipe",
  });
});
export const updateRecipe = catchErrors(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Updating the Recipe with id: ${id}`,
  });
});
export const deleteRecipe = catchErrors(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Deleting the Recipe with id: ${id}`,
  });
});
