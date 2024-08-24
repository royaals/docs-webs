import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const userName = process.env.DB_USERNAME;
const passWord = process.env.DB_PASSWORD;
const Connection = async () => {
  //cloud database

  const URL = `mongodb+srv://${userName}:${passWord}@docs.zjrlc.mongodb.net/`;
  //local database
  // const URL = `mongodb://localhost:27017/mydatabase`;
  try {
    await mongoose.connect(URL);
    console.log("database connected");
  } catch (error) {
    console.log("error while connecting with the database");
  }
};

export default Connection;
