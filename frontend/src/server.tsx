import { createApp } from "./create-app";
import express from "express";
import path from "path";
import { apolloMiddleware } from "./apollo-middleware";

const PUBLIC_DIR = path.join(__dirname, "../public");

createApp()
  .use(express.static(PUBLIC_DIR))
  .use(apolloMiddleware)
  .listen(3000, () => {
    console.log("Listening at http://localhost:3000/");
  });
