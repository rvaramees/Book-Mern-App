import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose, { Mongoose } from "mongoose";
import bookRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();
 
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
//1.default cors method
app.use(cors());
//2.Allow custom origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET','POST','PUT','DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To Website.");
});

app.use('/books', bookRoute);

// Connecting to database and listening to port
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
