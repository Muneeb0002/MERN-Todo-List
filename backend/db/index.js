import mongoose from "mongoose";
import 'dotenv/config';

const connectDb = () => {
  try {
    const url = process.env.DB_MONGO_URL;
    console.log("Mongo URL:", url);

    mongoose.connect(url);

    mongoose.connection.on('connected', () => {
      console.log("Database Connected");
    });

    mongoose.connection.on('disconnected', () => {
      console.log("Database Disconnected");
    });

    mongoose.connection.on('error', (err) => {
      console.log("Database Connection Error:", err);
    });

  } catch (error) {
    console.log("Catch Error:", error);
  }
}

export default connectDb;
