// src/models/User.ts
import mongoose, { Schema, models } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export const User = models.User || mongoose.model("User", UserSchema);
