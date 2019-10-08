import React from "react";
import {
  NavLink as RouterLink,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import styled, { DefaultTheme } from "styled-components";

type Props = RouteComponentProps & {
  to: string;
  text: string;
  exagerate?: boolean;
};

type ListItemProps = {
  active?: number;
  theme: DefaultTheme;
  exagerate?: number;
};

const StyledLink = styled(RouterLink)`
  border-bottom: ${(props: ListItemProps) =>
    !props.exagerate && props.active
      ? `1px solid ${props.theme.colors.black} !important`
      : `1px solid ${props.theme.colors.lightGray}`}
  :hover {
    border-bottom: 1px solid ${props =>
      props.exagerate ? props.theme.colors.lightGray : props.theme.colors.gray}
  }

  flex-basis: 0;
  flex-grow: 0;

  display: inline-block;
  padding: 15px 20px;
  margin-bottom: -1px;
  
  font-weight: ${props => (props.exagerate ? "600" : "100")}
  font-size: ${(props: ListItemProps) =>
    props.exagerate ? "2.1rem" : "1.6rem"}
  @media (max-width: 400px) {
    padding: 15px 10px;
    font-size: ${(props: ListItemProps) =>
      props.exagerate ? "1.9rem" : "1.3rem"}
  }
  text-decoration: none;
  white-space:nowrap;

  color: ${props => props.theme.colors.black};
  :visited {
    color: ${props => props.theme.colors.black};
  }
`;

export const MenuItem = withRouter(
  ({ location: { pathname }, to, text, exagerate }: Props) => (
    <StyledLink
      active={pathname === to ? 1 : undefined}
      to={to}
      exagerate={exagerate ? 1 : undefined}
    >
      {text}
    </StyledLink>
  )
);
