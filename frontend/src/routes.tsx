import { MainPage } from "./MainPage";
import { ContactPage } from "./ContactPage";
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
    path: "/contact",
    name: "another",
    exact: true,
    component: ContactPage
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
  },
  {
    path: "/",
    name: "work",
    exact: true,
    component: WorkPage
  }
];

export default routes;
