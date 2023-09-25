import mongoose, { Document, Schema, Model } from 'mongoose';

// Định nghĩa Schema
interface IUser extends Document {
  username: string;
  email: string;
  age: number;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: String,
  email: String,
  age: Number,
  password:String
});

// Tạo Model dựa trên Schema
const UserModel: Model<IUser> = mongoose.model('User', userSchema);

export default UserModel;
