import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const DB_url=process.env.DB_URL;
const Connection = async () => {


  const URL = DB_url;
 
  try {
    await mongoose.connect(URL);
    console.log("database connected");
  } catch (error) {
    console.log("error while connecting with the database");
  }
};

export default Connection;
