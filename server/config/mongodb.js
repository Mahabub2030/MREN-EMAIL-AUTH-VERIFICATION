import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect(`${process.env.MONGO_URL}/mern-auth`);
}