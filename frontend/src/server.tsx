import { createApp } from "./create-app";
import { apolloMiddleware } from "./apollo-middleware";

createApp()
  .use(apolloMiddleware)
  .listen(3000, () => {
    console.log("Listening at http://localhost:3000/");
  });
