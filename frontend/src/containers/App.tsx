import React from "react";
import { ApolloProvider } from "@apollo/react-common";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { hot } from "react-hot-loader/root";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const client = new ApolloClient({
  ssrMode: true,
  // Remember that this is the interface the SSR server will use to connect to the
  // API server, so we need to ensure it isn't firewalled, etc
  link: createHttpLink({
    uri: "http://localhost:4000",
    fetch
    // headers: {
    //   cookie: req.header("Cookie")
    // }
  }),
  // @ts-ignore
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>
);

export default hot(App);
