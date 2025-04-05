import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false }, // Not required for Google Auth
    provider: { type: String, default: "credentials" }, // NEW: Tracks sign-up method
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
