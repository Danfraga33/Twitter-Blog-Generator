import mongoose from "mongoose";

// const dbOptions: ConnectOptions = {
//   //   useNewUrlParser: true,
//   //   useUnifiedTopology: true,
// };

export default async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://danfraga33:OPGenerator@cluster0.l4fsqhp.mongodb.net/TwitterPosts?retryWrites=true&w=majority",
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
