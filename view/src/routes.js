import Index from "./views/Index.js";
import Profile from "./views/dashboard/Profile.js";
import Maps from "./views/dashboard/Maps.js";
import Register from "./views/dashboard/Register.js";
import Login from "./views/dashboard/Login.jsx";
import Tables from "./views/dashboard/Tables.js";
import Icons from "./views/dashboard/Icons.js";
import Category from "./views/dashboard/Category.jsx";
import Tag from "./views/dashboard/Tag.jsx";
import House from "./views/dashboard/House.jsx";

var routes = [
  {
    path: "/index",
    name: "routes.dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "routes.icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/house",
    name: "routes.house",
    icon: "ni ni-building text-blue",
    component: House,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "routes.user-profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "routes.table",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "routes.login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "routes.register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/category",
    name: "routes.category",
    icon: "ni ni-archive-2 text-info",
    component: Category,
    layout: "/admin"
  },
  {
    path: "/tag",
    name: "routes.tag",
    icon: "ni ni-tag",
    component: Tag,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "routes.user",
    icon: "ni ni-tag",
    component: Tag,
    layout: "/householder"
  },
  {
    path: "/index",
    name: "routes.dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/householder"
  }
];
export default routes;
