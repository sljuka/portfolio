import { createApp } from "./create-app";
import express, { Response, Request } from "express";
import path from "path";
import { apolloMiddleware } from "./apollo-middleware";

const PUBLIC_DIR = path.join(__dirname, "../public");

const healthCheck = (_req: Request, res: Response) => {
  res.status(200);
  res.send("I'm fine");
  res.end();
};

createApp()
  .use((req, _res, next) => {
    if (req.path != "/healthz") console.log("called", req.path, req.headers);
    next();
  })
  .use(express.static(PUBLIC_DIR))
  .use(apolloMiddleware)
  .get("/healthz", healthCheck)
  .get("/", healthCheck)
  .listen(3000, () => {
    console.log("Listening at http://localhost:3000/");
  });
