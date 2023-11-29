import CoverImage from "./CoverImage";
import Description from "./Description";

import classes from "./HomePageBody.module.css";

function HomePageBody() {
  return (
    <div className={classes.home_page_body}>
      <CoverImage />
      <Description />
    </div>
  );
}

export default HomePageBody;
