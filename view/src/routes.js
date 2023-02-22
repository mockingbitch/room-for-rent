import Index from "./views/Index.js";
import Profile from "./views/dashboard/Profile.js";
import Maps from "./views/dashboard/Maps.js";
import Register from "./views/dashboard/Register.js";
import Login from "./views/dashboard/Login.jsx";
import Tables from "./views/dashboard/Tables.js";
import Icons from "./views/dashboard/Icons.js";
import Category from "./views/dashboard/Category.jsx";
import Test from "./views/dashboard/Test.jsx";

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
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
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
    path: "/test",
    name: "routes.test",
    icon: "ni ni-archive-2 text-info",
    component: Test,
    layout: "/admin"
  }
];
export default routes;
