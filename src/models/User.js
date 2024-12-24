import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    googleId: {
      type: String, 
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String, 
    },
    role: {
      type: String,
      enum: ["user", "admin", "department_representative"],
      default: "user", 
    },
    department: {
      type: String, 
      required: function () {
        return this.role === "department_representative";
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
