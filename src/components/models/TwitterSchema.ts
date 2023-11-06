import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  topic: String,
  result: String,
});

export default mongoose.models?.Tweet || mongoose.model("Tweet", tweetSchema);
