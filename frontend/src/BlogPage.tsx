import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const GET_BLOGS = gql`
  {
    blogs {
      id
      title
      content
    }
  }
`;

export const BlogPage = () => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <span>"Loading..."</span>;
  if (error) return <span>{`Error! ${error.message}`}</span>;

  return (
    <div>
      <ul>
        {data.blogs.map(
          (blog: { id: number; title: string; content: string }) => (
            <div key={blog.id}>
              <h1>{blog.title}</h1>
              <p>{blog.content}</p>
            </div>
          )
        )}
      </ul>
    </div>
  );
};
