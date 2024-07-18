import express, { request, response } from "express";
import { mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import router from "./routes/bookRoute.js";
import cors from "cors";

const app = express();
const PORT = 5500;
// middleware for parsing request body
app.use(express.json());

// middleware for handleing cors policy
// option 1 allow all origins with default of cors(*)
// app.use(cors());

// option 2 allow custom origin
app.use(
  cors({
    origin: "https://mern-book-store-frontend-seven.vercel.app",
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.get("/ ", (request, response) => {
  console.log(request);
  return response.send("Welcome to MERN stack Book Store");
});

app.use("/books", router);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`App is running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
