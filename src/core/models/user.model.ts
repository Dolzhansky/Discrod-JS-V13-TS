import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    userId: string;
}

const UserSchema: Schema = new Schema({
    userId: { type: String, required: true },
});

export default mongoose.model<IUser>('users', UserSchema);