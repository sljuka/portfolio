import { createApp } from "./create-app";
import express from "express";
import path from "path";
import { apolloMiddleware } from "./apollo-middleware";

const PUBLIC_DIR = path.join(__dirname, "../public");

createApp()
  .use((req, _, next) => {
    console.log("called:", req.path, req.headers);
    next();
  })
  .get("/healthz", (_, res) => {
    res.status(200);
    res.send("I'm fine");
    res.end();
  })
  .use(express.static(PUBLIC_DIR))
  .use(apolloMiddleware)
  .get("/", (_, res) => {
    res.status(200);
    res.send("I'm fine");
    res.end();
  })
  .listen(3000, () => {
    console.log("Listening at http://localhost:3000/");
  });
