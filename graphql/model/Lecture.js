import mongoose from "mongoose";

const Schema = mongoose.Schema;
// 객체는 대문자로 시작

const Lecture = new Schema(
 {
  name: {
   type: String,
   required: true,
  },
  teacher: {
   type: String,
   required: true,
  },
  lv: {
   type: Number,
   required: true,
  },
  location: {
   type: String,
   required: true,
  },
  pay: {
   type: Number,
   required: true,
  },
 },
 {
  versionKey: false,
 }
);

export default mongoose.model("Lecture", Lecture, "Lecture");
