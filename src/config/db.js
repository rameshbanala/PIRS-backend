import { connect } from "mongoose";
import { MONGODB_URI } from './serverConfig.js';

const connectDB = async () => {
  try {
    await connect(MONGODB_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDB;