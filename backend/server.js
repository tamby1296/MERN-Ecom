import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const port = process.env.PORT || 5000;
connectDB(); // Connect to mongoDB
const app = express();

app.get("/ping", (_, res) => {
  res.send("API server is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Running on port:${port}`));
