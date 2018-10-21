// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";

// core components/views
import SurveyPage from "../../pages/survey";
import UserProfile from "../../pages/user";
const dashboardRoutes = [
  {
    path: "/survey",
    sidebarName: "Take Survey",
    navbarName: "Survey",
    icon: Dashboard,
    component: SurveyPage
  },
  {
    path: "/user/:id",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },

  { redirect: true, path: "/", to: "/user/:id", navbarName: "Redirect" }
];

export default dashboardRoutes;
