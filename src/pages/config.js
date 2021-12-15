// import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "./HomePage";


const config = [
  {
    component: Homepage,
    path: "/",
    secure: false,
    layout: DefaultLayout,
    exact: true,
  },
];

export default config;
