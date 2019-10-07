import { MainPage } from "./MainPage";
import { AnotherPage } from "./AnotherPage";
import { BlogPage } from "./BlogPage";
import { WorkPage } from "./WorkPage";

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
    exact: true,
    component: AnotherPage
  },
  {
    path: "/blog",
    name: "blog",
    exact: true,
    component: BlogPage
  },
  {
    path: "/work",
    name: "work",
    exact: true,
    component: WorkPage
  }
];

export default routes;
