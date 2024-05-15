import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.envMongoDBURI;

//connect to database

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
