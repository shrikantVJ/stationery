import mongoose from "mongoose";  // Ensure this import is at the top

export const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ MongoDB is already connected.");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "stationeryapp",
      useNewUrlParser: true,  // Remove these options if you're using MongoDB driver >= 4.0
      useUnifiedTopology: true,  // Remove these options if you're using MongoDB driver >= 4.0
    });

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    throw new Error("❌ Database connection failed");
  }
};
