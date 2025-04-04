import express from "express";

const productRouter = express.Router();

productRouter.get("/", async (_req, res) => {
  res.send("Hello World");
});

export default productRouter;
