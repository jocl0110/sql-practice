import catchErrors from "../utils/catchErrors";

export const getAllProducts = catchErrors(async (_req, res) => {
  res.json({ message: "Getting all products" });
});
export const getProductById = catchErrors(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `Getting product with id: ${id}` });
});
export const createProduct = catchErrors(async (_req, res) => {
  res.status(201).json({
    message: "Creating a new product",
  });
});
export const updateProduct = catchErrors(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Updating the product with id: ${id}`,
  });
});
export const deleteProduct = catchErrors(async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: `Deleting the product with id: ${id}`,
  });
});
