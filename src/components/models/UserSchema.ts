import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userid: String,
  firstName: String,
  lastName: String,
  fullName: String,
  email: String,
  tokens: Number,
});

export default mongoose.models?.User || mongoose.model("User", userSchema);
