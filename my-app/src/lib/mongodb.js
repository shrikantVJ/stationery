import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("✅ MongoDB is already connected.");
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw new Error("Database connection failed");
    }
};
