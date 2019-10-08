import "styled-components";

export const theme = {
  colors: {
    black: "#252628",
    cyan: "#02feda",
    white: "white",
    lightGray: "#eaeaea",
    darkWhite: "#f9f9f9",
    gray: "#c0c0c0"
  }
};

type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
