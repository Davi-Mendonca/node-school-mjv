import mongoose from "mongoose";
import * as dotenv from 'dotenv';

dotenv.config();

const databaseurl = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/schoolNode";

export default mongoose.connect(databaseurl);