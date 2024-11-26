import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

// Check if the model is already compiled to avoid OverwriteModelError
const User = mongoose.models.Users || mongoose.model('Users', userSchema);

export default User;