import { ApolloServer } from "apollo-server";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

export const createApolloServer = () =>
  new ApolloServer({ typeDefs, resolvers });

const server = createApolloServer();

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
