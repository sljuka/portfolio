import "styled-components";

export const theme = {
  colors: {
    black: "#252628",
    cyan: "#02feda",
    white: "white",
    lightGray: "#ececec",
    gray: "#ccc"
  }
};

type Theme = typeof theme;
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
