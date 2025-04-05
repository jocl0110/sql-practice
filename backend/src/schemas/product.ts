import z from "zod";

const productSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  description: z.string({
    required_error: "Description is required",
    invalid_type_error: "Description must be a string",
  }),
  images: z
    .array(
      z
        .string({
          required_error: "Image URL is required",
          invalid_type_error: "Image must be a string",
        })
        .url({
          message: "Invalid URL format for image", // Custom message for invalid URL
        })
    )
    .nonempty({
      message: "At least one image URL is required", // Custom message for non-empty array
    }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .positive({
      message: "Price must be a positive number", // Custom message for positive number
    }),
  category: z
    .string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    })
    .refine((value) => value.length > 0, {
      message: "Category cannot be an empty string", // Custom message for non-empty category
    }),
});

export function validateProduct(object: unknown) {
  return productSchema.safeParse(object);
}

export default productSchema;
