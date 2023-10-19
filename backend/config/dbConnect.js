import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  mongoose.set("strictQuery",false)
  mongoose.connect(process.env.DB_URI);
};

export default dbConnect;
