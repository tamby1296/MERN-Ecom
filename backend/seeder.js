import "mongoose";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import users from "./data/users.js";
import products from "./data/products.js";
import Product from "./models/product.js";
import User from "./models/user.js";
import Order from "./models/order.js";

dotenv.config({ path: ".env.local" });
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const admin = createdUsers[0]._id;

    const sampleProducts = products.map((product, i) => {
      return { ...product, user: admin };
    });
    await Product.insertMany(sampleProducts);

    console.log("** Data Imported! **");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("** Data Destroyed! **");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else importData();
