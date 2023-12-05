import classes from "./CoverImage.module.css";
import { Link } from "react-router-dom";

import { motion, useScroll, useTransform } from "framer-motion";

// const initialState = { opacity: 0 };
// const appear = { opacity: 1, transition: { duration: 0.75 } };

function CoverImage() {
  // SrollY tells us by how many px the user scrolled along the y axis
  const { scrollY } = useScroll();
  // useTransform will transform the px values to opacity values. It returns the transformed values,
  // it wrapes them in a motion value object, it does not re-render the component
  // function everytime we scroll
  const opacityCoverImg = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const yCoverImg = useTransform(scrollY, [0, 200], [0, -50]);

  const yText = useTransform(scrollY, [0, 400], [0, 100]);
  const scaleText = useTransform(scrollY, [0, 300], [1, 1.2]);

  return (
    <motion.div
      className={classes.cover_container}
      style={{ opacity: opacityCoverImg, y: yCoverImg }}
    >
      <motion.div
        className={classes.cover_body}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.75 } }}
        style={{ scale: scaleText, y: yText }}
      >
        <h1 className={classes.cover_title}>Welcome To Our Store</h1>
        <motion.button
          className={classes.shop_btn}
          whileHover={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
          whiletap={{ boxShadow: "inset -2.5px -2.5px #090f1d" }}
        >
          <Link to="/Grocery-Store/shop/" className={classes.shop_anchor}>
            <span>Shop Now</span>
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
      </motion.div>
    </motion.div>
  );
}

export default CoverImage;
