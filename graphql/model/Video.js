import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Video = new Schema(
 {
  thumbnailPath: {
   type: String,
   required: true,
  },
  author: {
   type: mongoose.Schema.Types.ObjectId,
   ref: "User",
  },
  title: {
   type: String,
   required: true,
  },
  description: {
   type: String,
   required: true,
  },
  videoPath: {
   type: String,
   required: true,
  },
  createdAt: {
   type: String,
   required: true,
  },
  hit: {
   type: Number,
   required: true,
  },
  likes: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },
  ],
  comments: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
   },
  ],
 },
 { versionKey: false }
);

export default mongoose.model(`Video`, Video, `Video`);
