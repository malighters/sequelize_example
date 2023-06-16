import express from "express";
import Sequelize from "sequelize";
import * as dotenv from "dotenv";
import dogRouter from "./routes/dog.router";
import infoRouter from "./routes/info.router";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(infoRouter);
app.use(dogRouter);
app.use(express.json());

app.listen(PORT, ()=> {
  console.log(`Server has been started on http://localhost:${PORT}`)
})