import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackDevMiddleware from "webpack-dev-middleware";
import express from "express";
// @ts-ignore
import webpackConfig from "../webpack.config.js";
import { apolloMiddleware } from "./apollo-middleware.js";

const config = {
  ...webpackConfig,
  entry: [
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    "./src/index.tsx"
  ]
};
const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler)).use(webpackHotMiddleware(compiler));

app.use(apolloMiddleware);

app.listen(3000, () => {
  console.log("Listening at http://localhost:3000/");
});
