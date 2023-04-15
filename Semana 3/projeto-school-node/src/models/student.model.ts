import { Schema } from "mongoose";
import mongoose from "mongoose";

export const studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  document: {
    type: String
  },
  password: {
    type: String
  },
  age: {
    type: Number,
    default: 18
  },
  phone: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

export const Student = mongoose.model('Student', studentSchema);