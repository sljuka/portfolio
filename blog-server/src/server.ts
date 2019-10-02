import { ApolloServer } from "apollo-server";
import { typeDefs } from "./type-defs";
import { resolvers } from "./resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
