import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/hello", (req, res) => {
  res.send("Hello Guys");
});

app.use("/hey", (req, res) => {
  res.send("Hey Guys");
});

app.listen(3000, (req, res) => {
  console.log("Server is running at 3000");
});

export { app };
