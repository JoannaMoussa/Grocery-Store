import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../components/Navigation/MainNavigation";

function RootLayout() {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet />
    </Fragment>
  );
}

export default RootLayout;
