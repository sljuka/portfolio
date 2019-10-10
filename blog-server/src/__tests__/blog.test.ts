import { typeDefs } from "../type-defs";
import { resolvers } from "../resolvers";
import { makeExecutableSchema } from "apollo-server";
import { graphql } from "graphql";

const schema = makeExecutableSchema({ typeDefs, resolvers });

test("blogs query", async () => {
  const query = `
    {
      blogs {
        title
      }
    }
  `;

  const { data } = await graphql(schema, query);
  expect(data).toEqual({
    blogs: [
      { title: "Harry Potter and the Chamber of Secrets" },
      { title: "Jurassic Park" }
    ]
  });
});
