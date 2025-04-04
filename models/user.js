import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // Not required for Google Auth
  },
  { timestamps: true }
);

// Ensure the model isn't re-registered on hot reload
const User = models.User || model("User", UserSchema);

export default User;
