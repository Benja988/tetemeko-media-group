import mongoose, { Document, Schema } from "mongoose";

export enum UserRole {
    User = "user",
    Admin = "admin",
    ContentManager = "content_manager",
}

export interface IUser extends Document {
    uid: string;
    email: string;
    name: string;
    password: string;
    role: UserRole;
    isVerified: boolean;
    verificationToken?: string;
    resetToken?: string;
    resetTokenExpiry?: Date;
    refreshToken?: string;
}

const UserSchema: Schema = new Schema(
    {
        uid: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: Object.values(UserRole), default: UserRole.User, index: true },
        isVerified: { type: Boolean, default: false },
        verificationToken: { type: String },
        resetToken: { type: String },
        resetTokenExpiry: { type: Date },
        refreshToken: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
