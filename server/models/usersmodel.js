import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  verifOtp: { type: String, default: "" },
  verifOtpExpireAt: { type: Number, default: 0 },
  isAccountVerified: { type: Boolean, default: false },
  restOtp: { type: String, default: "" },
  restOtpExpireAt: { type: Number, default: 0 },
});

const userModel = mongoose.model.user || mongoose.model('user', userSchema);

export default userModel;