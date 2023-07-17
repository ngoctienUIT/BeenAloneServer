import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: Boolean,
  },
  birthday: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: "",
  },
  dateAlone: {
    type: Date,
    required: true,
  },
},
{ timestamps: true },
);


const User = mongoose.model("user", UserSchema);

export default User;
