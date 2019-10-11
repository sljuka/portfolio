import React, { ReactNode } from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 4em;
`;

const P = styled.p`
  font-size: 2em;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 51px);
`;

const Wip = () => (
  <Wrapper>
    <H1>Comming soon</H1>
    <P>I'm still working on it</P>
  </Wrapper>
);

export const wip = (WrappedComponent: ReactNode) => () => <Wip />;
