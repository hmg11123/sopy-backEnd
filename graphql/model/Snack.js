import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Snack = new Schema(
 {
  name: {
   type: String,
   require: true,
  },
  price: {
   type: Number,
   require: true,
  },
 },
 { versionKey: false }
);

export default mongoose.model(`Snack`, Snack, `Snack`);
