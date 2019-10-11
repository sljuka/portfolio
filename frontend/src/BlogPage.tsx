import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { BlogList } from "./BlogList";
import styled from "styled-components";
import { wip } from "./wip";

const GET_BLOGS = gql`
  {
    blogs {
      id
      title
      description
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BlogPage = wip(() => {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return <span>"Loading..."</span>;
  if (error) return <span>{`Error! ${error.message}`}</span>;

  return (
    <Wrapper>
      <BlogList blogs={data.blogs} />
    </Wrapper>
  );
});
