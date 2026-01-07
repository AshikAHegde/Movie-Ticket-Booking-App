import mongoose from "mongoose";

async function connectdb() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/QuickShow`);
    console.log("MongoDB connected");
  } catch (e) {
    console.log(e.message);
  }
}

export default connectdb;
