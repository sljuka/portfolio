import React from "react";
import styled from "styled-components";

const H1 = styled.span`
  font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 51px);
`;

export const NotFound = () => (
  <Wrapper>
    <H1>Not found 🐪</H1>
  </Wrapper>
);
