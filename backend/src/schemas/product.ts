import z from "zod";

const imageSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("url"),
    value: z
      .string({
        required_error: "Image URL is required",
        invalid_type_error: "Image must be a string",
      })
      .url({
        message: "Only jpg, jpeg, png, and webp images are allowed",
      }),
  }),
  z.object({
    type: z.literal("file"),
    value: z.string({
      required_error: "Image file path is required",
      invalid_type_error: "Image must be a string",
    }),
    filename: z.string(),
    mimetype: z.enum(["image/jpeg", "image/jpg", "image/png", "image/webp"]),
    size: z.number().max(5 * 1024 * 1024, {
      // 5 MB limit for image size
      message: "Image size must be less than or equal to 5MB",
    }),
  }),
]);

const productSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(2, {
      message: "Name must be at least 2 characters long",
    })
    .max(100, { message: "Name must be at most 100 characters long" }),
  images: z
    .array(imageSchema)
    .nonempty({
      message: "At least one image is required",
    })
    .max(5, { message: "Maximum of 5 images are allowed" }),
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

export type Product = z.infer<typeof productSchema>;
export type Image = z.infer<typeof imageSchema>;

export class ProductValidator {
  static validateCreate(input: unknown) {
    return productSchema.safeParse(input);
  }
  static validateUpdate(input: unknown) {
    return productSchema.partial().safeParse(input);
  }
  static validateImage(input: unknown) {
    return imageSchema.safeParse(input);
  }
  static validateImages(input: unknown) {
    return z.array(imageSchema).nonempty().max(5).safeParse(input);
  }
}

export default productSchema;
