import { MainPage } from "./MainPage";
import { AnotherPage } from "./AnotherPage";

const routes = [
  {
    path: "/",
    name: "home",
    exact: true,
    component: MainPage
  },
  {
    path: "/another",
    name: "another",
    exact: false,
    component: AnotherPage
  }
];

export default routes;
