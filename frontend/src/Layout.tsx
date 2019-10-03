import { Route, Switch } from "react-router";
import React from "react";
import { Link } from "react-router-dom";
import routes from "./routes";

export const Layout = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/another">Another</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      {routes.map(route => (
        <Route key={route.name} {...route} />
      ))}
    </Switch>
  </div>
);
