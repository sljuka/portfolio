import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
import { MenuItem } from "./MenuItem";

const GlobalStyle = createGlobalStyle`
  html { font-size: 10px; }
  body {
    background-color: ${props => props.theme.colors.white};
    margin: 0px;
  }
`;

const Nav = styled.nav`
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`;

const Wrapper = styled.div``;

const Menu = styled.ul`
  background-color: ${props => props.theme.colors.white}
  font-family: sans-serif;
  margin: 0 auto;
  padding: 0px;
  max-width: 960px;
  line-height: 20px;
  display: flex;
  list-style: none;
`;

export const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Nav>
        <Menu>
          <MenuItem to="/" text="David Šljukić" exagerate />
          <MenuItem to="/work" text="Work" />
          <MenuItem to="/blog" text="Blog" />
          <MenuItem to="/another" text="Contact" />
        </Menu>
      </Nav>
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route} />
        ))}
      </Switch>
    </Wrapper>
  );
};
