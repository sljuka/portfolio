import React from "react";
import { ApolloProvider } from "@apollo/react-common";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../Layout";
import { hot } from "react-hot-loader/root";

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
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ApolloProvider>
);

export default hot(App);
