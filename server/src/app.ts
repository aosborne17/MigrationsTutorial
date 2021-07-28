import express, { Request, Response } from "express";
import cors from "cors";
import http from "http";
import "express-async-errors";
import { errorHandler } from "./api/middlewares/errorHandler";
// import { signInRouter } from "./api/routes/signin";
// import { signUpRouter } from "./api/routes/signup";
import session from "./api/middlewares/session";
import db from "./models";
import userRouter from "./api/routes/user";

const app = express();
app.use(cors());
app.use(express.json());
// configure session middleware
app.use(session);

const server = http.createServer(app);

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use("/api/user", userRouter);
// app.use("/api/video", userRouter);

app.post("/", async (req, res) => {
  console.log("test working");
  res.send("Hey");
});

app.post("/test", async (req, res) => {
  console.log("test working");
  const { name, email, password } = req.body;

  console.log(req.body);

  const user = await db.User.create(req.body);
  res.send(user);
});

app.post("/api/channel", async (req, res) => {
  const channel = await db.Channel.create(req.body);
  res.send(channel);
});

app.post("/api/video", async (req, res) => {
  const video = await db.Video.create(req.body);
  res.send(video);
});

app.delete("/api/user/:id", async (req, res) => {
  const id = req.params.id;

  const user = await db.User.destroy({
    where: {
      id,
    },
  });
  console.log(user);

  res.send("user deleted");
});

// configure session middleware
app.use(session);

// app.use(signInRouter);
// app.use(signUpRouter);
// app.use(profileRouter);

app.use(errorHandler);

export { server };
