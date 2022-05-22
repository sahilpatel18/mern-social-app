import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const PORT = process.env.PORT || 5000;
const PART1 = process.env.FIRST;
const PART2 = process.env.SECOND;

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL = `mongodb+srv://${PART1}:${PART2}@cluster0.t4bqb.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
