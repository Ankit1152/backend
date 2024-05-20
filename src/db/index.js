import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongo connected !! DB host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo connection error", error);
    process.exit(1);
  }
};

export default connectDB;
