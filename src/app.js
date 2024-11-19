import express from "express";
import cors from "cors";
import cookieParser from "cooker-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

export { app };
