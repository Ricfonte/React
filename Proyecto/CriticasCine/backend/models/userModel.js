import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
},
{
    timestamps: true
});

const User = mongoose.model("users", UserSchema);
export default User;