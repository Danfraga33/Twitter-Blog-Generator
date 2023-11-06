import mongoose, { ConnectOptions } from "mongoose";

const dbOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://danfraga33:OPGenerator@cluster0.l4fsqhp.mongodb.net/?retryWrites=true&w=majority",
      dbOptions,
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
