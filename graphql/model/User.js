import mongoose from "mongoose";

const Schema = mongoose.Schema;

const User = new Schema(
 {
  name: {
   type: String,
   required: true,
  },
  mobile: {
   type: String,
   required: true,
  },
  email: {
   type: String,
   required: true,
  },
  nickName: {
   type: String,
   required: true,
  },
  zoneCode: {
   type: String,
   required: true,
  },
  address: {
   type: String,
   required: true,
  },
  detailAddress: {
   type: String,
   required: true,
  },
  createdAt: {
   type: String,
   required: true,
  },
  videos: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
   },
  ],
  subscribeForMe: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },
  ],
  subscribeToOther: [
   {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
   },
  ],
 },
 {
  versionKey: false,
 }
);

export default mongoose.model(`User`, User, `User`);
