import CoverImage from "./CoverImage";
import Description from "./Description";
import VegetablesSection from "./VegetablesSection";
import ParallaxSection from "./ParallaxSection";
import QualitySection from "./QualitySection";

import classes from "./HomePageBody.module.css";

function HomePageBody() {
  return (
    <div className={classes.home_page_body}>
      <CoverImage />
      <Description />
      <VegetablesSection />
      <ParallaxSection />
      <QualitySection />
    </div>
  );
}

export default HomePageBody;
