import mongoose, { Document, Schema } from "mongoose";

export interface IRole extends Document {
    name: string;
    permissions: string[]; // Optional: Add permissions later
}

const RoleSchema: Schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        permissions: { type: [String], default: [] }, 
    },
    { timestamps: true }
);

export default mongoose.model<IRole>("Role", RoleSchema);
