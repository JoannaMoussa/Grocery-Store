import { useRouteError } from "react-router-dom";
import ErrorBlock from "../components/UI/ErrorBlock";
import MainNavigation from "../components/Navigation/MainNavigation";
import { Fragment } from "react";

function ErrorPage() {
  try {
    const error = useRouteError();
    if (error.status === 404)
      return (
        <Fragment>
          <MainNavigation />
          <ErrorBlock message="It seems that you're lost!" />
        </Fragment>
      );
    else {
      return (
        <Fragment>
          <MainNavigation />
          <ErrorBlock message="Unexpected error occured!" />
        </Fragment>
      );
    }
  } catch {
    return (
      <Fragment>
        <MainNavigation />
        <ErrorBlock message="Unexpected error occured!" />
      </Fragment>
    );
  }
}

export default ErrorPage;
