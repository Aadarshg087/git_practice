import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timestamp: true }
);

export const User = mongoose.model("User", userSchema);
