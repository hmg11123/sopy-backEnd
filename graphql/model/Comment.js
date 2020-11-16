import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Comment = new Schema(
 {
  description: {
   type: String,
   required: true,
  },
  author: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
  },
  createdAt: {
   type: String,
   required: true,
  },
 },
 {
  versionKey: false,
 }
);

export default mongoose.model(`Comment`, Comment, `Comment`);
