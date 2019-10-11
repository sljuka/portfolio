import React from "react";
import styled from "styled-components";

const SuperSpan = styled.span`
  font-size: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 51px);
`;

export const MainPage = () => (
  <Wrapper>
    <SuperSpan>Hi, I'm David Šljukić, software engineer</SuperSpan>
  </Wrapper>
);
