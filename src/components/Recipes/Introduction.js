import { Fragment } from "react";
import classes from "./Introduction.module.css";

import { motion } from "framer-motion";

function Introduction() {
  return (
    <Fragment>
      <h1 className={classes.title}>Our Recipe Ideas For This Week</h1>
      <div className={classes.intro_txt_container}>
        <motion.p
          className={classes.intro_txt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          Feeling stumped about what to whip up in the kitchen? Fret not, we've
          got your back! Explore these delicious recipes that come complete with
          their own ingredient lists,
          <span> which you can dirtectly add to your cart</span>, making
          mealtime a breeze!
        </motion.p>
      </div>
    </Fragment>
  );
}

export default Introduction;
