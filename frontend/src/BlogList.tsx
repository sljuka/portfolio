import React from "react";
import styled from "styled-components";

type Blog = {
  title: string;
  description: string;
  id: number;
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 0px;
  width: 100%;
`;

const Blog = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.white}
  margin: 10px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 20px;
  font-size: 1.4em;
  max-width: 100%;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  flex-grow: 1;
  width: 100%;
`;

const Right = styled.div`
  width: 70px;
`;

export const BlogList = ({ blogs }: { blogs: Blog[] }) => (
  <StyledList>
    {blogs.map(blog => (
      <Blog key={blog.id}>
        <Left>
          <div>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        </Left>
        <Right>
          <img src="https://picsum.photos/70/120" />
        </Right>
      </Blog>
    ))}
  </StyledList>
);
