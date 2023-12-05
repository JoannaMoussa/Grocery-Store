import { Link } from "react-router-dom";
import classes from "./ParallaxSection.module.css";

import { motion } from "framer-motion";

const hidden = { opacity: 0, scale: 0.8 };
const appear = { opacity: 1, scale: 1, transition: { duration: 0.5 } };

function ParallaxSection() {
  return (
    <div className={classes.parallax}>
      <motion.h2
        initial={hidden}
        whileInView={appear}
        viewport={{ once: true }}
      >
        Explore Our Weekly Recipes
      </motion.h2>
      <motion.p initial={hidden} whileInView={appear} viewport={{ once: true }}>
        Unleash the chef within and discover a plethora of delectable recipes
        tailored for every taste and skill level.
      </motion.p>
      <motion.button
        className={classes.recipe_btn}
        whileHover={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
        whiletap={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
        initial={hidden}
        whileInView={appear}
        viewport={{ once: true }}
      >
        <Link to="/Grocery-Store/recipes/" className={classes.recipes_anchor}>
          <span>Go To Recipes</span>
          <svg
            className={classes.arrow_icon}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#030712"
              d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69l-2.72-2.72Z"
            />
          </svg>
        </Link>
      </motion.button>
    </div>
  );
}

export default ParallaxSection;
