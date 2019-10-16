import React from "react";
import fetch from "cross-fetch";
import { ApolloProvider } from "@apollo/react-common";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { StaticRouter } from "react-router-dom";
import { Request, Response, NextFunction } from "express";
import ReactDOMServer from "react-dom/server";
import { getDataFromTree } from "@apollo/react-ssr";
import { ServerStyleSheet, ThemeProvider } from "styled-components";
import { Layout } from "./Layout";
import { Html } from "./html";
import { theme } from "./theme";

export const apolloMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const acceptHeader = req.headers.accept;
  if (!acceptHeader || !acceptHeader.includes("text/html")) return next();

  const client = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: "http://localhost:4000",
      fetch
      // headers: {
      //   cookie: req.header("Cookie")
      // }
    }),
    cache: new InMemoryCache()
  });

  const context = {};

  // The client-side App will instead use <BrowserRouter>
  const App = (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <StaticRouter location={req.url} context={context}>
          <Layout />
        </StaticRouter>
      </ThemeProvider>
    </ApolloProvider>
  );

  getDataFromTree(App)
    .then(() => {
      // We are ready to render for real
      const sheet = new ServerStyleSheet();
      const content = ReactDOMServer.renderToString(sheet.collectStyles(App));
      const initialState = client.extract();

      const styleTags = sheet.getStyleTags();

      const html = (
        <Html style={styleTags} content={content} state={initialState} />
      );

      res.status(200);
      res.send(`<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(html)}`);
      res.end();
    })
    .catch(next);
};
