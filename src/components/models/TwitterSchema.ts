import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  userid: String,
  firstName: String,
  lastName: String,
  email: String,
  topic: String,
  keywords: String,
  result: String,
});

export default mongoose.models?.Tweet || mongoose.model("Tweet", tweetSchema);
