import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import products from "./data/products.js";
import { connectDB } from "./config/db.js";

const port = process.env.PORT || 5000;
// connectDB(); // Connect to mongoDB
const app = express();

app.get("/ping", (_, res) => {
  res.send("API server is running");
});

app.get("/api/products", (_, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id == req.params.id);
  res.json(product);
});

app.listen(port, () => console.log(`Running on port:${port}`));
