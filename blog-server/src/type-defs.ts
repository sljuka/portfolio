import { gql } from "apollo-server";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = gql`
  type Blog {
    id: ID
    title: String
    author: String
    content: String
    description: String
  }

  type Query {
    blogs: [Blog]
  }
`;
