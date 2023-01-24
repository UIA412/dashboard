/**
 *  Routes
 */
import Dashboard from "dashboard/views/Dashboard.js";
import Buildings from "dashboard/views/Buildings.js";


// import Icons from "dashboard/views/Icons.js";
// import Map from "dashboard/views/Map.js";
// import Notifications from "dashboard/views/Notifications.js";
// import TableList from "dashboard/views/TableList.js";
// import Typography from "dashboard/views/Typography.js";
import UserProfile from "dashboard/views/UserProfile.js";
import TermsAndConditions from "dashboard/views/TermsAndConditions";
import Map from "dashboard/views/Map.js";
import Savings from "dashboard/views/Savings";
import Reports from "dashboard/views/Reports";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/buildings",
    name: "My Buildings",
    icon: "tim-icons icon-world",
    component: Buildings,
    layout: "/admin"
  },
  {
    path: "/savings",
    name: "My Savings",
    icon: "tim-icons icon-money-coins",
    component: Savings,
    layout: "/admin"
  },
  {
    path: "/reports",
    name: "My Reports",
    icon: "tim-icons icon-chart-bar-32",
    component: Reports,
    layout: "/admin"
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-support-17",
    component: Map,
    layout: "/admin"
  },
  {
    path: "/support",
    name: "Support",
    icon: "tim-icons icon-support-17",
    component: Dashboard,
    layout: "/admin"
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/terms-and-conditions",
    name: "Terms and Conditions",
    icon: "tim-icons icon-",
    component: TermsAndConditions,
    layout: "/admin"
  },
   // {
  //   path: "/testcomponent",
  //   name: "API Test",
  //   icon: "tim-icons icon-settings",
  //   component: Test,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin"
  // }
];
export default routes;
