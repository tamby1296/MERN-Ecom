import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const resp = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${resp.connection.host}`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
    process.exit(1);
  }
};
