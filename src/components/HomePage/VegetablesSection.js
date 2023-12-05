import classes from "./VegetablesSection.module.css";
import vegetablesImg from "../../assets/vegetables.png";

import { motion } from "framer-motion";

const imgItem = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, x: -100 },
};

const sideItem = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.75 } },
  hidden: { opacity: 0, x: 100 },
};

function VegetablesSection() {
  return (
    <div className={classes.section_container_wrapper}>
      <motion.div
        className={classes.section_container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.img
          src={vegetablesImg}
          alt="Vegetables"
          className={classes.img}
          variants={imgItem}
        />
        <motion.div className={classes.side_div} variants={sideItem}>
          <p className={classes.small_txt}>Farm-to-Table Freshness</p>
          <h2>Our Commitment to Locally Sourced Vegetables</h2>
          <p className={classes.txt}>
            Our commitment to supporting local farmers is at the heart of what
            we do, ensuring that you not only enjoy the best flavors but also
            contribute to the
            <span className={classes.italic}>sustainability</span> of our local
            agricultural community.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default VegetablesSection;
