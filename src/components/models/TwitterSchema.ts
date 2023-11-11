import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  id: String,
  firstName: String,
  lastName: String,
  email: String,
  topic: String,
  result: String,
});

export default mongoose.models?.Tweet || mongoose.model("Tweet", tweetSchema);
