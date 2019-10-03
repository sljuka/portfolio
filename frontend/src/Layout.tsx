import { Route, Switch } from "react-router";
import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-right: auto; /* 1 */
  margin-left: auto; /* 1 */
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const Layout = () => (
  <Wrapper>
    <nav>
      <ul>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/another">Contact</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      {routes.map(route => (
        <Route key={route.name} {...route} />
      ))}
    </Switch>
  </Wrapper>
);
