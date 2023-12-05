import classes from "./QualitySection.module.css";
import VegetablesSectionClasses from "./VegetablesSection.module.css";

import qualityImg from "../../assets/quality.jpg";

import { motion } from "framer-motion";

const imgItem = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, x: 100 },
};

const sideItem = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, x: -100 },
};

function QualitySection() {
  return (
    <div className={VegetablesSectionClasses.section_container_wrapper}>
      <motion.div
        className={VegetablesSectionClasses.section_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className={`${VegetablesSectionClasses.side_div} ${classes.align_end} ${classes.side_div}`}
          variants={sideItem}
        >
          <p className={VegetablesSectionClasses.small_txt}>
            Quality You Can Taste
          </p>
          <h2>Your Destination for Premium Grocery</h2>
          <p className={VegetablesSectionClasses.txt}>
            We take pride in offering a meticulously curated selection of
            premium products that elevate your shopping experience. Discover the
            difference that top-notch ingredients can make in your culinary
            adventures.
          </p>
        </motion.div>
        <motion.img
          src={qualityImg}
          alt="Grocery"
          className={`${VegetablesSectionClasses.img} ${classes.img}`}
          variants={imgItem}
        />
      </motion.div>
    </div>
  );
}

export default QualitySection;
