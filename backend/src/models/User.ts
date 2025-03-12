import mongoose, { Document, Schema } from "mongoose";
import { IRole } from "./Role";

export interface IUser extends Document {
  uid: string;
  email: string;
  name: string;
  password: string;
  role: mongoose.Types.ObjectId | IRole | null;  // ✅ Allow null
  isVerified: boolean;
  refreshToken?: string;
  verificationToken?: string;
  verificationTokenExpires?: Date;
  mfaEnabled?: boolean;
  mfaSecret?: string;
  failedLoginAttempts?: number;
  lockUntil?: Date;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
}



const UserSchema: Schema = new Schema(
  {
    uid: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"], // Email validation using RegExp
    },
    name: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: "Role", default: null },  // ✅ Allow null
    isVerified: { type: Boolean, default: false },
    refreshToken: { type: String, default: null },
    verificationToken: { type: String },
    verificationTokenExpires: { type: Date },
    mfaEnabled: { type: Boolean, default: false },
    mfaSecret: { type: String },
    failedLoginAttempts: { type: Number, default: 0 },
    lockUntil: { type: Date },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);




export default mongoose.model<IUser>("User", UserSchema);
