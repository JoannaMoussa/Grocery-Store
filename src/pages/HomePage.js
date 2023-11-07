import { Fragment } from "react";
import CoverImage from "../components/CoverImage";
import Description from "../components/Description";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <Fragment>
      <CoverImage />
      <Description />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
